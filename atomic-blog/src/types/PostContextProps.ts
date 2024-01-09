import { Post } from "./Post";

export type PostContextProps = {
  posts: Post[];
  searchQuery: string;
  onClearPosts: () => void;
  onAddPost: (post: Post) => void;
  onSetSearchQuery: (searchQuery: string) => void;
};
