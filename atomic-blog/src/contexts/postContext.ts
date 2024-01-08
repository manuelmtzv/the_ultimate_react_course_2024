import { createContext } from "react";
import { PostContext } from "../types/PostContext";

const initialValue: PostContext = {
  posts: [],
  onAddPost: () => null,
  onClearPosts: () => null,
};

export const PostContextElement = createContext<PostContext>(initialValue);
