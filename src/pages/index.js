import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="My Portfolio">
      <p>Welcome to my website. Before I introduce myself, here is a picture of me below:</p>
      <StaticImage
        alt="me in my wethinkcode shirt"
        src="../images/me.png"
      />
    </Layout>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage