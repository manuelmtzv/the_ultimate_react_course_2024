import { useMemo, useState } from "react";
import { createRandomPost } from "../utils/createRandomPost";
import ArchiveList from "./ArchiveList";

export default function Archive() {
  const posts = useMemo(() => {
    return Array.from({ length: 10000 }, () => createRandomPost());
  }, []);

  const [showArchive, setShowArchive] = useState(false);

  return (
    <aside>
      <h2>Post archive</h2>
      <button onClick={() => setShowArchive((s) => !s)}>
        {showArchive ? "Hide archive posts" : "Show archive posts"}
      </button>

      {showArchive && <ArchiveList posts={posts} />}
    </aside>
  );
}
