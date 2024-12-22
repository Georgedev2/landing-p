export const createArrayOfDuplicate = (copy = {}, size = 6) => {
  const arr = [];
  for (let i = 0; i < size; i++) {
    copy.id = i;
    arr.push(JSON.parse(JSON.stringify(copy)));
  }
  return arr;
};

export const getRandomNumber = () => {
  return Math.random() * Date.now();
};
