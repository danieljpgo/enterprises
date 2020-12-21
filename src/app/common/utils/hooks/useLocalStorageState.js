// Thanks Kent C Dodds.
// https://www.youtube.com/watch?v=yu3dnHrnps4

import { useEffect, useState } from 'react';

export const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem(key) || JSON.stringify(defaultValue));
    } catch (e) {
      return defaultValue;
    }
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};
