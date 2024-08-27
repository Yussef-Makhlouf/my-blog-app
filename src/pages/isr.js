import { fetchAllPosts } from "@/lib/fetchAllPosts";

export async function getStaticProps() {
  const posts = await fetchAllPosts();

  return {
    props: { posts },
    revalidate: 10, // Revalidate every 10 seconds
  };
}

export default function ISR({ posts }) {
  return (
    <div>
      <h1>Incremental Static Regeneration (ISR)</h1>
      <ul>
        {posts.map(post => (
          <li key={post._id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
