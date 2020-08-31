import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import Details from './Details';

const PostList = ({ posts }) => {
  return (
    <>
      { posts.map(post => (
        <article key={ post.node.id } className="post">
          <Link to={ post.node.fields.slug } className="post__wrapper">
            <div className="post__thumbnail">
              { post.node.frontmatter.thumbnail &&
                <Img fluid={ post.node.frontmatter.thumbnail.childImageSharp.fluid } />
              }
            </div>
            <div className="post__meta">
              <h2 className="post__title">{ post.node.frontmatter.title }</h2>
              <div className="post__details">
                <Details date={ post.node.frontmatter.date } timeToRead={ post.node.timeToRead } />
              </div>
              <p className="post__excerpt">{ post.node.excerpt }</p>
            </div>
          </Link>
        </article>
      )) }
    </>
  );
}

export default PostList;
