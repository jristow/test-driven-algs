/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"


import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
            linkedin
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <p>
        Hi! I'm <strong>{author}</strong> a recovering mechanical engineer turned
        software nerd. Here I write about software engineering and computer science
        topics. If you're interested in leadership and management topics, head on 
        over to <a href="https://jordanristow.com/">jordanristow.com</a> and 
        check out my writing there. If you like what you see here, connect with me
        on social!
        <br></br>
        {` `}
        Social:
        {` `}
        <a href={`https://twitter.com/${social.twitter}`}>
          Twitter
        </a>
        {` `}
        <a href={`https://linkedin.com/in/${social.twitter}`}>
          LinkedIn
        </a>
      </p>
    </div>
  )
}

export default Bio
