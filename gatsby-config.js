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
    "gatsby-source-super-mario",
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        enableListener: true,
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Press Start 2P",
            file: "https://fonts.googleapis.com/css2?family=Press+Start+2P",
          },
        ],
      },
    },
  ],
};
