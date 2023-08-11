import { useState } from "react";
import { TextExpanderProps } from "../interfaces/TextExpanderProps";

export default function TextExpander({
  limit = 50,
  text = "",
  className = "",
  defaultShow = false,
  expandTitle = "show more",
  contractTitle = "show less",
  buttonColor = "#ff6622",
  buttonInline = false,
  onToggle = () => null,
}: TextExpanderProps) {
  const [show, setShow] = useState(defaultShow);

  const showExpand = text.length > limit;
  const trimText = showExpand && !show ? text.slice(0, limit) + "..." : text;

  const styles = {
    expand: {
      color: buttonColor,
      cursor: "pointer",
      display: buttonInline ? "block" : "auto",
    },
  };

  function handleToggle(): void {
    setShow((prev) => !prev);
    onToggle((prev) => !prev);
  }

  const expandText = showExpand && !show ? expandTitle : contractTitle;
  return (
    <div className={className}>
      <p>
        {trimText}

        {showExpand && (
          <span style={styles.expand} onClick={handleToggle}>
            {expandText}
          </span>
        )}
      </p>
    </div>
  );
}
