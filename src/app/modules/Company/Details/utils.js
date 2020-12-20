export const getShortName = (name) => {
  const nameSplited = name.toString().split(' ');

  if (nameSplited.length > 1) {
    return `${nameSplited[0][0]}${nameSplited[1][0]}`;
  }
  return `${nameSplited[0][0]}${nameSplited[0][1]}`;
};
