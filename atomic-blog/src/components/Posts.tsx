import { Post } from "../types/Post";
import List from "./List";

interface Props {
  posts: Post[];
}

export default function Posts({ posts }: Props) {
  return (
    <section>
      <List posts={posts} />
    </section>
  );
}
