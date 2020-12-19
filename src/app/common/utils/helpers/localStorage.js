export const getLocalStorageData = (key) => {
  const data = window.localStorage.getItem(key);
  try {
    return data ? JSON.parse(data) : undefined;
  } catch {
    return undefined;
  }
};

export const setLocalStorageData = (key, body) => {
  window.localStorage.setItem(key, JSON.stringify(body));
};
