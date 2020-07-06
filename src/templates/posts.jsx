import React from 'react';

export default ({ pageContext: { frontmatter, html } }) => {
  return (
    <div>
      <h1>{ frontmatter.title }</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}
