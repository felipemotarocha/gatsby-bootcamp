import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Contact info will be here.</p>
      <p>
        My Instagram:{" "}
        <a href="https://instagram.com/dicasparadevs" target="__blank">
          Click here.
        </a>
      </p>
    </Layout>
  )
}

export default ContactPage
