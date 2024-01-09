import { usePostContext } from "../hooks/usePostContext";

export default function Results() {
  const { posts } = usePostContext();

  return <p>🚀 {posts.length} atomic posts found</p>;
}
