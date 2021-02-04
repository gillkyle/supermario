module.exports = {
  siteMetadata: {
    title: "super-mario-site",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "Mario",
        fieldName: "mario",
        url: "https://super-mario-api.glitch.me/",
      },
    },
  ],
};
