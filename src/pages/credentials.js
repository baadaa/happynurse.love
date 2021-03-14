import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default props => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          credentials
        }
      }
    }
  `)
  const credentials = data.site.siteMetadata.credentials.map((item, index) => (
    <li key={index}>{item}</li>
  ))
  return (
    <Layout
      pageTitle="Credentials"
      pageDescription="Professional credentials, awards, and certifications"
    >
      <ul>{credentials}</ul>
    </Layout>
  )
}
