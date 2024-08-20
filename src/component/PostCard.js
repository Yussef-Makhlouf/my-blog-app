

// import React, { useState } from 'react';
// import { useRouter } from 'next/navigation';

// const PostCard = ({ post }) => {
//   const [likes, setLikes] = useState(0);
//   const router = useRouter();

//   const handleLike = () => setLikes(likes + 1);

//   const navigateToPost = () => router.push(`/post/${post.id}`);

//   return (
//     <div className="border border-gray-300 p-6 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
//       <h3 className="text-2xl font-semibold mb-3 text-blue-800">{post.title}</h3>
//       <p className="text-gray-700 mb-5">{post.body}</p>
//       <div className="flex justify-between items-center">
//         <button
//           className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-md hover:shadow-lg transition-all"
//           onClick={handleLike}
//         >
//           Like ({likes})
//         </button>
//         <button
//           className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded shadow-md hover:shadow-lg transition-all"
//           onClick={navigateToPost}
//         >
//           Read More
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostCard;
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../../public/style/postCard.css';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);
  const router = useRouter();

  const handleLike = () => setLikes(likes + 1);

  const navigateToPost = () => router.push(`/PostCard/${post.id}`);

  return (
    <div className="post-card">
      <h3 className="post-title">{post.title}</h3>
      <p className="post-body">{post.body}</p>
      <div className="post-actions">
        <button className="like-button" onClick={handleLike}>
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
