import { useCallback, memo } from "react";
import { usePostContext } from "../hooks/usePostContext";
import { Post } from "../types/Post";

type ArchiveListProps = {
  posts: Post[];
};

const ArchiveList = memo(function ArchiveList({ posts }: ArchiveListProps) {
  const { onAddPost } = usePostContext();

  const handleAddPost = useCallback(
    (post: Post) => onAddPost(post),
    [onAddPost]
  );

  return (
    <ul>
      {posts.map((post, i) => (
        <li key={i}>
          <p>
            <strong>{post.title}:</strong> {post.body}
          </p>
          <button onClick={() => handleAddPost(post)}>Add as new post</button>
        </li>
      ))}
    </ul>
  );
});

export default ArchiveList;
