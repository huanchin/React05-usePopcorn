import { useEffect, useState } from "react";

export function useLocalStorageState(initialState, key) {
  // create [watched, setWatched] state
  // get key & value from local storage and stored in "watched" state
  const [value, setValue] = useState(function () {
    let storedValue = JSON.parse(localStorage.getItem(key));
    if (!storedValue) storedValue = initialState;
    return storedValue;
  });

  // update local storage
  // whenever watched list change, stored new watched list into local storage
  // state(value) changed => re-render => useEffect
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
