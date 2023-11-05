import React from 'react';
import Posts from '../components/Posts';
import Link from 'next/link';
const PostsPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 120
    }
  });
  const posts = await response.json();
  const postsContent = posts.map((post, index) => {
    return (
      <Link href={`posts/${post.id}`} key={index} className='card'>
        <div>
          <div className='postInfo'>
            <small className='userId'>User: {post.userId}</small>
            <small className='userId'>Post id: {post.id}</small>
          </div>
          <div className='postBody'>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        </div>
      </Link>
    )
  })
  return (
    <section>
      <h1>PostsPage</h1>
        <div className='postsContainer'>
          {postsContent}
        </div>
      {/* <Posts /> */}
    </section>
  );
};

export default PostsPage;
