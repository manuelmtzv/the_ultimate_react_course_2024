import { Post } from "../types/Post";
import AddPostForm from "./AddPostForm";
import Posts from "./Posts";

interface Props {
  posts: Post[];
  onAddPost: (post: Post) => void;
}

export default function Main({ posts, onAddPost }: Props) {
  return (
    <main>
      <AddPostForm onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
