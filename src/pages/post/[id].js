import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { fetchAllPosts } from '@/lib/fetchAllPosts';
import { fetchPostByID } from '@/lib/fetchPostByID';

export async function getStaticPaths() {
  const posts = await fetchAllPosts();
  const paths = posts.map(post => ({
    params: { id: post._id.toString() }
  }));

  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const post = await fetchPostByID(params.id);
  const allPosts = await fetchAllPosts();
  const currentIndex = allPosts.findIndex(p => p._id.toString() === params.id);

  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return {
    props: {
      post,
      nextPost: nextPost ? nextPost._id.toString() : null,
      prevPost: prevPost ? prevPost._id.toString() : null,
    },
  };
}

export default function Post({ post, nextPost, prevPost }) {
  const router = useRouter();

  const navigateToPost = (id) => {
    router.push(`/post/${id}`);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <Image src={post.imageSrc} alt={post.title} width={600} height={400} />
      <p>{post.body}</p>
      <div>
        {prevPost && <button onClick={() => navigateToPost(prevPost)}>Previous</button>}
        {nextPost && <button onClick={() => navigateToPost(nextPost)}>Next</button>}
      </div>
    </div>
  );
}
