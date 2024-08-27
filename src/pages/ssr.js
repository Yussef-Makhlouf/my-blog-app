// import { fetchAllPosts } from '../lib/fetchAllPosts';
import { fetchAllPosts } from "@/lib/fetchAllPosts";
export async function getServerSideProps() {
  const posts = await fetchAllPosts();

  return {
    props: { posts },
  };
}

export default function SSR({ posts }) {
  return (
    <div>
      <h1>Server-Side Rendering (SSR)</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
