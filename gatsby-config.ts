import type { GatsbyConfig } from "gatsby";

require("dotenv").config()

// require("dotenv").config({

//   path: `.env.${process.env}`,

// })

// exports.onCreateWebpackConfig = ({ actions }:any) => {
//   actions.setWebpackConfig({
//     resolve: {
//       fallback: {
//         crypto: false,
//       },
//     },
//   });
// };
const config: GatsbyConfig = {
  siteMetadata: {
    title: `celinasportfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        spaceId: process.env.CONTENTFUL_SPACE_ID
      }
    },
    
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    "gatsby-plugin-sitemap",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: "images",
        path: "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "Monospace Font:400,700",
          `Montserrat`
           // Replace with the desired font name and variants
        ],
    
        display: "swap" // Set to 'swap' for better performance
      }
    }
  ]
};

export default config;
