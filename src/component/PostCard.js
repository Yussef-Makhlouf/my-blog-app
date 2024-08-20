
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../public/style/postCard.css';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const router = useRouter();

  const handleLike = () => setLikes(likes + 1);

  const navigateToPost = () => router.push(`/post/${post.id}`);

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        <button className="like-button text-blue-500 hover:text-blue-700 transition-colors duration-300 ease-in-out font-bold text-lg  mr-4 " onClick={handleLike}>
          Like ({likes})
        </button>
        <button className="read-more-button" onClick={navigateToPost}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default PostCard;
