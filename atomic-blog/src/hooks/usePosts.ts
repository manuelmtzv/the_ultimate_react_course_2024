import { useState } from "react";
import { createRandomPost } from "../utils/createRandomPost";

export const usePosts = () => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  return {
    posts,
    setPosts,
  };
};
