import React from "react";

const Posts = ({ posts }) => {
  console.log(posts);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.no}>
            {post.no} - {post.title} - {post.content}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Posts;
