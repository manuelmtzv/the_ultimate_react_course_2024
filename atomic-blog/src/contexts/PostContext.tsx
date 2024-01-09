import { ReactNode, createContext } from "react";
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

function PostProvider({ children }: { children: ReactNode }) {
  const {
    searchQuery,
    searchedPosts,
    handleAddPost,
    handleClearPosts,
    setSearchQuery,
  } = usePosts();

  return (
    <PostContext.Provider
      value={{
        posts: searchedPosts,
        searchQuery,
        onAddPost: handleAddPost,
        onClearPosts: handleClearPosts,
        onSetSearchQuery: setSearchQuery,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostContext, PostProvider };
