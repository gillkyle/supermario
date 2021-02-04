module.exports = {
  siteMetadata: {
    title: "super-mario-site",
  },
  plugins: [
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
