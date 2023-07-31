import type { GatsbyConfig } from "gatsby";

require("dotenv").config()

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
          `Montserrat`,
          'Caprasimo',
          'Lobster Two',
          'Calistoga',
          'Abhaya Libre'
        ],
    
        display: "swap" 
      }
    }
  ]
};

export default config;
