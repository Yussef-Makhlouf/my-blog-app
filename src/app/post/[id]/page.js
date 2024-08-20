"use client";
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const data = await response.json();
        setPost(data);
      };

      fetchPost();
    }
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="text-2xl font-bold">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;
