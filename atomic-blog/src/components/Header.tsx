import { Post } from "../types/Post";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

interface Props {
  posts: Post[];
  onClearPosts: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Header({
  posts,
  onClearPosts,
  searchQuery,
  setSearchQuery,
}: Props) {
  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results posts={posts} />
        <SearchPosts
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}