import type { GatsbyConfig } from "gatsby";
import dotenv from "dotenv";

if (process.env.NODE_ENV === "development") {
  dotenv.config({
    path: ".env.development",
  });
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `image-in.net`,
    siteUrl: `https://image-in.net`,
    description: `Image IN: Votre agence web spécialisée dans l'ultra performance !`,
    author: `Maxime Bajeux`,
    defaultImage: "/images/image-in.png",
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          "gatsby-remark-gifs",
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 890,
              withWebp: true,
              withAvif: true,
              loading: "lazy",
              decoding: "async",
            },
          },
        ],
      },
    }, {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-gifs", {
          resolve: "gatsby-remark-images",
          options: {
            maxWidth: 890,
            withWebp: true,
            withAvif: true,
            loading: "lazy",
            decoding: "async",
          },
        },
      ],
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/404`],
        createLinkInHead: true,
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "fr-FR",
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["500", "700", "900", "500i"],
            },
            {
              family: "Bebas Neue",
              variants: ["400"],
            },
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://image-in.net",
        sitemap: "https://image-in.net/sitemap-index.xml",
        env: {
          development: {
            policy: [{ userAgent: "*", disallow: ["/"] }],
          },
          production: {
            policy: [{ userAgent: "*", allow: "/" }],
          },
        },
      },
    },
    {
      resolve: "gatsby-plugin-facebook-pixel",
      options: {
        pixelId: process.env.GATSBY_FACEBOOK_PIXEL_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [`${process.env.GATSBY_GA_MEASUREMENT_ID}`],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: process.env.GATSBY_GA_MEASUREMENT_ID, // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-google-analytics", // default
          anonymize: true, // default
          allowAdFeatures: false, // default
        },
        facebookPixel: {
          pixelId: "330563630876256", // leave empty if you want to disable the tracker
          cookieName: "gatsby-gdpr-facebook-pixel", // default
        },
        // defines the environments where the tracking should be available  - default is ["production"]
        environments: ["production", "development"],
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
        name: "realisations",
        path: "./src/realisations/",
      },
      __key: "realisations",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "labs",
        path: "./src/labs/",
      },
      __key: "labs",
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
