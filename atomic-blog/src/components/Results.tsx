import { type Post } from "../types/Post";

export default function Results({ posts }: { posts: Post[] }) {
  return <p>🚀 {posts.length} atomic posts found</p>;
}
