import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM do, YYYY")
      body {
        json
      }
    }
  }
`

const Blog = ({
  data: {
    contentfulBlogPost: {
      title,
      publishedDate,
      body: { json },
    },
  },
}) => {
  const options = {
    renderNode: {
      "embedded-asset-block": ({
        data: {
          target: {
            fields: { title, file },
          },
        },
      }) => {
        const alt = title["en-US"]
        const url = file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(json, options)}
    </Layout>
  )
}

export default Blog
