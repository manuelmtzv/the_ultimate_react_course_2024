import { useState } from "react";
import { createRandomPost } from "../utils/createRandomPost";
import { Post } from "../types/Post";

export const usePosts = () => {
  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );
  const [searchQuery, setSearchQuery] = useState("");

  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  function handleAddPost(post: Post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }

  return {
    posts,
    searchQuery,
    searchedPosts,
    handleAddPost,
    handleClearPosts,
    setPosts,
    setSearchQuery,
  };
};
