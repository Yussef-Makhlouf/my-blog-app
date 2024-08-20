"use client";
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
const Post = () => {
  // const router = useRouter();
  const params=useParams();
  
  const { id } = params;
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

  if (!post) return <p className="text-2xl font-bold text-center text-red-500 mt-10 ">Loading...</p>;

  return (
    <div className="post-page p-4 mt-10 shadow-lg ">
      <h2 className="text-2xl font-bold text-center ">{post.title}</h2>
      <p className="text-lg mt-4 ">{post.body}</p>
    </div>
  );
};

export default Post;
