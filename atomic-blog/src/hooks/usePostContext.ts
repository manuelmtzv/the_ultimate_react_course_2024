import { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

export const usePostContext = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error("usePostsContext must be used within a PostProvider");
  }

  return context;
};
