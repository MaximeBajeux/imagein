import type { GatsbyNode } from "gatsby";
import { resolve } from "path";
import { createRemoteFileNode } from "gatsby-source-filesystem";
import FilterWarningsPlugin from "webpack-filter-warnings-plugin";
import { ARTICLES_PER_PAGE } from "./src/constants";

// Create schema custom fields
export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    const { createTypes } = actions;

    createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      imageRemote: File @link(from: "fields.localImageRemote")
    }

    type Frontmatter {
      title: String!
      label: String!
      h1: String!
      slug: String!
      date: Date! @dateformat
      description: String!
      image: File @fileByRelativePath
      imageURL: String
      imageAlt: String
      type: String
      categories: [String]
    }
  `);
  };

export const onCreateNode: GatsbyNode["onCreateNode"] = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}: {
  node: any;
  actions: any;
  createNodeId: any;
  getCache: any;
}) => {
  if (node.internal.type === "Mdx" && node.frontmatter.imageURL) {
    try {
      const fileNode = await createRemoteFileNode({
        url: node.frontmatter.imageURL,
        parentNodeId: node.id,
        createNode,
        createNodeId,
        getCache,
      });

      if (fileNode) {
        createNodeField({
          node,
          name: "localImageRemote",
          value: fileNode.id,
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createSlice, createRedirect } = actions;

  const blogPostTemplate = resolve(`src/templates/blogpost.tsx`);
  const blogTemplate = resolve(`src/templates/blog.tsx`);
  const realisationTemplate = resolve(`src/templates/realisation.tsx`);
  const labTemplate = resolve(`src/templates/lab.tsx`);
  const result = await graphql<{
    allMdx: {
      nodes: {
        id: string;
        frontmatter: {
          slug: string;
          categories: string[];
        };
        internal: {
          contentFilePath: string;
        };
      }[];
    };
  }>(`
    query AllPosts {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
            categories
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const posts = result.data?.allMdx.nodes.filter((node) =>
    node.internal.contentFilePath.includes("src/posts")
  );

  if (!posts) {
    reporter.panic(`Error while running GraphQL query.`);
    return;
  }

  // find all unique categories into post.frontmatter.categories and create a map with it as key and an array of posts as value

  const categoriesMap = new Map<string, any[]>();

  posts.forEach((post) => {
    if (!post.frontmatter.categories) return;
    post.frontmatter.categories.forEach((category) => {
      if (!categoriesMap.has(category)) {
        categoriesMap.set(category, []);
      }

      categoriesMap.get(category)?.push(post);
    });
  });

  // for each category, create a page with the list of posts that have this category in their frontmatter.categories. Create also a generic blog page with all posts. We paginate the blog page with 12 posts per page.

  categoriesMap.forEach((posts, category) => {
    // create each page of the paginated blog page
    const numPages = Math.ceil(posts.length / ARTICLES_PER_PAGE);

    // slugify the category name (ex: "Web Design" => "web-design" or "Actualités" => "actualites")
    const slugifiedCategory = category
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");


    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path:
          i === 0
            ? `/blog/categorie/${slugifiedCategory}`
            : `/blog/categorie/${slugifiedCategory}/${i + 1}`,
        component: blogTemplate,
        context: {
          limit: ARTICLES_PER_PAGE,
          skip: i * ARTICLES_PER_PAGE,
          category: [category],
          numPages,
          currentPage: i + 1
        },
      });
    }
    );
  });

  // Create the generic blog page with all posts. We paginate the blog page with 12 posts per page.
  const numPages = Math.ceil(posts.length / ARTICLES_PER_PAGE);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path:
        i === 0
          ? `/blog`
          : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: ARTICLES_PER_PAGE,
        skip: i * ARTICLES_PER_PAGE,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { id: post.id },
    });
  });

  const realisations = result.data?.allMdx.nodes.filter((node) =>
    node.internal.contentFilePath.includes("src/realisations")
  );

  if (!realisations) {
    reporter.panic(`Error while running GraphQL query.`);
    return;
  }

  realisations.forEach((realisation) => {
    createPage({
      path: `/realisations/${realisation.frontmatter.slug}`,
      component: `${realisationTemplate}?__contentFilePath=${realisation.internal.contentFilePath}`,
      context: { id: realisation.id },
    });
  });

  const labs = result.data?.allMdx.nodes.filter((node) =>
    node.internal.contentFilePath.includes("src/labs")
  );

  if (!labs) {
    reporter.panic(`Error while running GraphQL query.`);
    return;
  }

  labs.forEach((lab) => {
    createPage({
      path: `/le-lab/${lab.frontmatter.slug}`,
      component: `${labTemplate}?__contentFilePath=${lab.internal.contentFilePath}`,
      context: { id: lab.id },
    });
  });

  // Create header and footer slices
  const headerSlice = resolve("src/components/header/header.tsx");
  const footerSlice = resolve("src/components/footer/footer.tsx");

  createSlice({
    id: "header",
    component: headerSlice,
  });

  createSlice({
    id: "footer",
    component: footerSlice,
  });

  createRedirect({
    fromPath: "/options/",
    toPath: "/votre-site-a-250-euros-par-mois-pendant-1-an/",
  });

  createRedirect({
    fromPath: "/nos-offres/",
    toPath: "/offres/",
  });

  createRedirect({
    fromPath: "/index.php/5-conseils-pour-developper-votre-communaute-sur-les-reseaux-sociaux",
    toPath: "/blog/5-conseils-pour-developper-votre-communaute-sur-les-reseaux-sociaux/",
  });

  createRedirect({
    fromPath: "/index.php/pirate-de-yandex-les-regles-du-seo-devoilees",
    toPath: "/blog/piratage-de-yandex-les-regles-du-seo-devoilees/",
  });

  createRedirect({
    fromPath: "/index.php/netlify-acquiert-gatsby",
    toPath: "/blog/netlify-acquiert-gatsby-inc/",
  });

  createRedirect({
    fromPath: "/index.php/confier-sa-communication-a-une-entreprise-combien-ca-coute",
    toPath: "/blog/confier-sa-communication-a-une-entreprise-combien-ca-coute/",
  });

  createRedirect({
    fromPath: "/index.php/comment-optimiser-votre-site-pour-le-mobile-et-augmenter-votre-taux-de-conversion",
    toPath: "/blog/comment-optimiser-votre-site-pour-le-mobile-et-augmenter-votre-taux-de-conversion/",
  });

  createRedirect({
    fromPath: "index.php/blog-webapp-react-go-en-solo",
    toPath: "/blog/webapp-react-go-solo/",
  });

  createRedirect({
    fromPath: "/index.php/accueil/blog",
    toPath: "/blog/",
  });

  createRedirect({
    fromPath: "/index.php/nos-tarifs",
    toPath: "/offres/",
  });

  createRedirect({
    fromPath: "/index.php/5-conseils-pour-developper-votre-communaute-sur-les-reseaux-sociaux",
    toPath: "/blog/5-conseils-pour-developper-votre-communaute-sur-les-reseaux-sociaux/",
  });

  createRedirect({
    fromPath: "/~partytown/",
    toPath: "/",
  });

  createRedirect({
    fromPath: "/index.php/home/blog",
    toPath: "/blog/",
  });

  createRedirect({
    fromPath: "/index.php/blog",
    toPath: "/blog/",
  });

  createRedirect({
    fromPath: "/index.php/search/%7Bsearch_term_string%7D/feed/rss2/",
    toPath: "/blog/",
  });

  createRedirect({
    fromPath: "/index.php/en-savoir-plus",
    toPath: "/contact/",
  });

  createRedirect({
    fromPath: "/realisations/uddcas/",
    toPath: "/realisations/udccas/",
  });

  createRedirect({
    fromPath: "/index.php/author/imagein_admin",
    toPath: "/",
  });

  createRedirect({
    fromPath: "/index.php/prendre-rendez-vous",
    toPath: "/contact/",
  });

  createRedirect({
    fromPath: "index.php/developpement-informatique",
    toPath: "/",
  });

  createRedirect({
    fromPath: "/index.php/design",
    toPath: "/",
  });

  createRedirect({
    fromPath: "/index.php/mentions-legales",
    toPath: "/mentions-legales/",
  });

  createRedirect({
    fromPath: "/index.php/communication",
    toPath: "/",
  });

  createRedirect({
    fromPath: "/index.php/gatsbyjs-ameliorer-la-velocite-de-son-site",
    toPath: "/blog/comment-gatsbyjs-peut-il-aider-a-ameliorer-la-velocite-de-votre-site/",
  });

  createRedirect({
    fromPath: "/index.php/gatsbyjs-ameliorer-la-velocite-de-son-site/feed",
    toPath: "/blog/comment-gatsbyjs-peut-il-aider-a-ameliorer-la-velocite-de-votre-site/",
  });

  createRedirect({
    fromPath: "/blog/SEO/",
    toPath: "/blog/categorie/seo/",
  });

  createRedirect({
    fromPath: "/blog/Communication/",
    toPath: "/blog/categorie/communication/",
  });

  createRedirect({
    fromPath: "/blog/Programmation/",
    toPath: "/blog/categorie/programmation/",
  });

  createRedirect({
    fromPath: "/blog/Actualités/",
    toPath: "/blog/categorie/actualites/",
  });

};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /dotlottie-player/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};
