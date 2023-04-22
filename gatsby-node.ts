import type { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage, createSlice } = actions;

  const blogPostTemplate = resolve(`src/templates/blogpost.tsx`);
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
    query BlogPostsTemplate {
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

  result.data?.allMdx.nodes.forEach((node) => {
    createPage({
      path: "/blog/" + node.frontmatter.slug,
      component: `${blogPostTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: {
        id: node.id,
      },
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
