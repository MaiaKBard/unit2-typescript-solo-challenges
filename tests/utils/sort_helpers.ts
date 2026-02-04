const makeList = (num: number): number[] => {
  const arr: number[] = [];

  for (let i = 0; i < num; i++) {
    arr.push(Math.ceil(Math.random() * num));
  }

  return arr;
};

const inc = (a: number, b: number): number => a - b;

export { makeList, inc };
