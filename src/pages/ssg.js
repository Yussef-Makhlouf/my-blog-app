// import { fetchAllPosts } from '../lib/fetchAllPosts';
import { fetchAllPosts } from '@/lib/fetchAllPosts';
export async function getStaticProps() {
  const posts = await fetchAllPosts();

  return {
    props: { posts },
  };
}

export default function SSG({ posts }) {
  return (
    <div>
      <h1>Static-Site Generation (SSG)</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
