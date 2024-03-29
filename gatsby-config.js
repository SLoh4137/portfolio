/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: "Stephan Loh",
        author: "Stephan Loh",
        description:
            "Portfolio for Stephan Loh, a software engineer who loves learning about optimization",
        siteUrl: "https://stephanloh.gtsb.io",
    },
    plugins: [
        `gatsby-plugin-typescript`,
        `gatsby-plugin-typegen`,
        {
            resolve: `gatsby-alias-imports`,
            options: {
                aliases: {
                    "@constants": `src/constants`,
                    "@utils": `src/utils`,
                },
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `assets`,
                path: `${__dirname}/src/assets`,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
    ],
}
