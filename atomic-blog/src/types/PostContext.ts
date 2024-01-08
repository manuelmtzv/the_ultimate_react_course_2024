import { Post } from "./Post";

export type PostContext = {
  posts: Post[];
  onClearPosts: () => void;
  onAddPost: (post: Post) => void;
};
