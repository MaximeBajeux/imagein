import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `image-in.net`,
    siteUrl: `https://image-in.net`,
    description: `Image IN: L'agence web qu'il vous faut !`,
    author: `Maxime Bajeux`,
    defaultImage: "/images/douche-onyx-1.jpg",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "fr-FR",
      },
    }
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Bebas Neue", "Montserrat:300,500,700,900,300i,500i,700i,900i"],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "lottie",
        path: "./src/lottie/",
      },
      __key: "lottie",
    },
  ],
};

export default config;
