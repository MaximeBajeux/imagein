import type { GatsbyNode } from "gatsby";
import { resolve } from "path";
import { createRemoteFileNode } from "gatsby-source-filesystem";
import FilterWarningsPlugin from "webpack-filter-warnings-plugin";

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
      slug: String!
      date: Date! @dateformat
      description: String!
      image: File @fileByRelativePath
      imageURL: String
      imageAlt: String
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
  const { createPage, createSlice } = actions;

  const blogPostTemplate = resolve(`src/templates/blogpost.tsx`);
  const realisationTemplate = resolve(`src/templates/realisation.tsx`);
  const labTemplate = resolve(`src/templates/lab.tsx`);
  const result = await graphql<{
    allMdx: {
      nodes: {
        id: string;
        frontmatter: {
          slug: string;
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

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.frontmatter.slug}`,
      component: `${blogPostTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: { slug: post.frontmatter.slug },
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
      context: { slug: realisation.frontmatter.slug },
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
      context: { slug: lab.frontmatter.slug },
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
