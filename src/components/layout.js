import React from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import "./layout.css"

const Layout = ({ children }) => (
  <div className="container">
    <Helmet>
      <meta charSet="utf-8" />
      <title>Gatstagram</title>
      <link rel="canonical" href="http://davyhausser.com/" />
    </Helmet>

    <main>{children}</main>

    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
