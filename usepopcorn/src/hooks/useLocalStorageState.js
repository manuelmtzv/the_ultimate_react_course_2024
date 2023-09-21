import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key);
    return valueInLocalStorage ? JSON.parse(valueInLocalStorage) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(state));
    },
    [state, key]
  );

  return [state, setState];
}

useLocalStorageState.propTypes = {
  initialValue: PropTypes.any.isRequired,
  key: PropTypes.string.isRequired,
};
