import clientPromise from './mongodb';

export async function fetchAllPosts() {
  const client = await clientPromise;
  const db = client.db('notes');

  const posts = await db.collection('posts').find({}).toArray();
  return posts;
}
