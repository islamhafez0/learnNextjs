import React from "react";

const PostDetails = async ({ postId }) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await response.json();
  return (
    <div>
      <div className="card">
        <div className="postInfo">
          <small className="userId">User: {post.userId}</small>
          <small className="userId">Post id: {post.id}</small>
        </div>
        <div className="postBody">
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
