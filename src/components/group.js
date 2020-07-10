import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const GroupWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto 12px auto;
`

const Group = ({ title, links }) => (
  <GroupWrapper>
    <h1>{title}</h1>
    <nav>
      {links.map(({ href, title }) => (
        <a href={href}>{title}</a>
      ))}
    </nav>
  </GroupWrapper>
)

Group.propTypes = {
  title: PropTypes.string,
  links: PropTypes.Array
}

Group.defaultProps = {
  title: ``,
  links: []
}

export default Group
