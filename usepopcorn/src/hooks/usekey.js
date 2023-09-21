import PropTypes from "prop-types";
import { useEffect } from "react";

export function useKey(key, action) {
  useEffect(() => {
    function handleEvent(e) {
      if (e.key.toLowerCase() === key.toLowerCase()) action();
    }
    document.addEventListener("keydown", handleEvent);

    return () => document.removeEventListener("keydown", handleEvent);
  }, [key, action]);
}

useKey.propTypes = {
  key: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
