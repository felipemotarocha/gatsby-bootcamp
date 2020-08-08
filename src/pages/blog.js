import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const {
    allContentfulBlogPost: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <ol className={blogStyles.posts}>
        {edges.map(({ node: { title, slug, publishedDate } }) => (
          <li className={blogStyles.post}>
            <Link to={`/blog/${slug}`}>
              <h2>{title}</h2>
              <p>{publishedDate}</p>
            </Link>
          </li>
        ))}
      </ol>
    </Layout>
  )
}

export default BlogPage
