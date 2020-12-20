export const getShortName = (name) => {
  const nameSplited = name.toString().split(' ');

  if (nameSplited.length > 1) {
    return `${name[0][0]}${name[1][0]}`;
  }
  return `${name[0][0]}${name[0][1]}`;
};
