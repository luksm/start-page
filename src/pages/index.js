import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Group from "../componets/group"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <main>
      <Group
        title="GitHub"
        links={[
          {
            href: "https://github.com/foreseecode/cxs-client/",
            title: "CXS-Client"
          },
          {
            href: "https://github.com/foreseecode/fs-graphql/",
            title: "FS-Graphql"
          }
        ]}
      />
    </main>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
