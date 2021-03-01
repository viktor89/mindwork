import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    className="p-3 bg-purple-800"
  >
    <div
      className="m-0 m-auto max-w-4xl p-3"
    >
      <h1 className="m-0">
        <Link
          to="/"
          className="text-white"
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
