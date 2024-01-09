import { usePostContext } from "../hooks/usePostContext";

export default function SearchPosts() {
  const { searchQuery, onSetSearchQuery } = usePostContext();

  return (
    <input
      value={searchQuery}
      onChange={(e) => onSetSearchQuery(e.target.value)}
      placeholder="Search posts..."
    />
  );
}
