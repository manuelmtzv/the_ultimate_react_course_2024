import Results from "./Results";
import SearchPosts from "./SearchPosts";
import { usePostContext } from "../hooks/usePostContext";

export default function Header() {
  const { onClearPosts } = usePostContext();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />

        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
