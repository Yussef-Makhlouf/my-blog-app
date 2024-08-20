

"use client";  
import React, { useEffect, useState } from 'react';
import PostCard from '@/component/PostCard';
const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="blog-page ">
      <h2 className="blog-title text-2xl font-bold mb-4 text-center text-blue-500 ">Blog</h2>
      <div className="posts-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {posts.map((post) => (
          <PostCard  key={post.id} post={post}  />
        ))}
      </div>
    </div>
  );
};

export default Blog;
