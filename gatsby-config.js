/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Davy Hausser`,
    description: `The Personal Website of Davy Hausser`,
    author: `Davy Hausser`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout`),
      },
    },
    {
      resolve: `gatsby-transformer-screenshot`,
      options: {
        nodeTypes: [`StartersYaml`],
      },
    },
  ],
}
