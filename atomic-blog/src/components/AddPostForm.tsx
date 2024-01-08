import { FormEvent, useState } from "react";
import { Post } from "../types/Post";

interface Props {
  onAddPost: (post: Post) => void;
}

export default function AddPostForm({ onAddPost }: Props) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = function (e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!body || !title) return;
    onAddPost({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Post body"
      />
      <button>Add post</button>
    </form>
  );
}
