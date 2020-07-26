import React from 'react';
import { Link } from 'gatsby';

const PostList = ({ title, posts }) => {
  return (
    <section className="posts">
      <h1>{ title }</h1>
      { posts.map(post => (
        <article className="post">
          <Link to={ post.node.fields.slug }>
            <h2 class="post__title">{ post.node.frontmatter.title }</h2>
            <p class="post__excerpt">{ post.node.excerpt }</p>
          </Link>
        </article>
      )) }
    </section>
  );
}

export default PostList;
