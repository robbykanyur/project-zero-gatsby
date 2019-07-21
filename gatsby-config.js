module.exports = {
  siteMetadata: {
    title: `Project Zero`,
    author: `@robertkanyur`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
  ],
}
