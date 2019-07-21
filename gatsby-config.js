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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Project Zero`,
        short_name: `Project Zero`,
        start_url: `/`,
        background_color: `#617cad`,
        theme_color: `#617cad`,
        display: `standalone`,
        icon: `src/images/zero-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
  ],
}
