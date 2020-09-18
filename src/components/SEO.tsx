import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type MetaType =
    | {
          name: string
          content: string
      }
    | {
          property: string
          content: string
      }

interface SEOProps {
    lang?: string
    meta?: MetaType[]
    description?: string
    title: string
}

export default function SEO(props: SEOProps) {
    const { lang = "en", meta = [], description = "", title } = props
    const { site } = useStaticQuery<GatsbyTypes.SEOQuery>(
        graphql`
            query SEO {
                site {
                    siteMetadata {
                        title
                        description
                    }
                }
            }
        `
    )

    if (!site?.siteMetadata?.title || !site?.siteMetadata?.description) {
        throw new Error(
            "Either title or description not defined in siteMetadata. Check gatsby-config"
        )
    }

    const metaDescription = description || site.siteMetadata.description

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
            ].concat(meta)}
        />
    )
}