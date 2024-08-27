// import clientPromise from './mongodb';
import { ObjectId } from 'mongodb';
import clientPromise from "./mongodb";
export async function fetchPostByID(id) {
  const client = await clientPromise;
  const db = client.db('notes');

  const post = await db.collection('posts').findOne({ _id: new ObjectId(id) });
  return post;
}
