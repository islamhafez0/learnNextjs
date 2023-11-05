"use client"
import React, { useState, useEffect } from 'react';

const Posts = () => {
  const [post, setPost] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts/2");
      const post = await response.json();
      setPost(post);
    }
    fetchData();
  }, [])
  return (
    <section>
      <h2>{post ? post.title : "loading...."}</h2>
    </section>
  )
};

export default Posts;
