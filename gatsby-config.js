module.exports = {
  siteMetadata: {
    title: `Christy and Ryan`,
    description: `We're getting married, celebrate with us!`,
    author: `@ryanefendy`,
  },
  plugins: [
    'gatsby-plugin-layout',
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `engagement`,
    //     path: `${__dirname}/src/images/engagement`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `engagement2`,
    //     path: `${__dirname}/src/images/engagement2`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `travel`,
    //     path: `${__dirname}/src/images/travel`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `howwemet`,
    //     path: `${__dirname}/src/images/howwemet`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `vaccinated`,
    //     path: `${__dirname}/src/images/vaccinated`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christyryan.com`,
        short_name: `christyryan`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#b59333`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
