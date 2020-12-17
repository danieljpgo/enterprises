// @TODO Melhorar aqui

export const getLocalStorageData = (key) => {
  const data = window.localStorage.getItem(key);
  return data && JSON.parse(data);
};

export const setLocalStorageData = (key, body) => {
  window.localStorage.setItem(key, JSON.stringify(body));
};
