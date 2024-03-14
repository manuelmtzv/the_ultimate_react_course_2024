import { ReactNode, createContext, useMemo } from "react";
import { PostContextProps } from "../types/PostContextProps";
import { usePosts } from "../hooks/usePosts";

const defaultState: PostContextProps = {
  posts: [],
  searchQuery: "",
  onAddPost: () => null,
  onClearPosts: () => null,
  onSetSearchQuery: () => null,
};

const PostContext = createContext<PostContextProps>(defaultState);

function PostContextProvider({ children }: { children: ReactNode }) {
  const value = usePosts();

  const state = useMemo(() => {
    return {
      ...value,
      posts: value.searchedPosts,
      onAddPost: value.handleAddPost,
      onClearPosts: value.handleClearPosts,
      onSetSearchQuery: value.setSearchQuery,
    };
  }, [value]);

  return <PostContext.Provider value={state}>{children}</PostContext.Provider>;
}

export { PostContext, PostContextProvider };
