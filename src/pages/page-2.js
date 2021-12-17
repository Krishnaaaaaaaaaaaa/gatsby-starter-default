import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page of businessssss</h1>
    <p>Welcome to page  ok2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
