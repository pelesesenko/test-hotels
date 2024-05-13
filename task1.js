// #1
const pluralizeComputer = (num) => {
  const lastOne = num % 10;
  const lastTwo = num % 100;
  const ending =
    [2, 3, 4].includes(lastOne) && ![12, 13, 14].includes(lastTwo) ? 'а' : lastOne === 1 && lastTwo !== 11 ? '' : 'ов';
  return `${num} компьютер${ending}`;
};
// Встроенный класс Intl имеет метод PluralRules, который плюрализует с учетом локали.
// Правда он не очень удобный, даже с обёрткой, так что если нужен только русский, то вроде
// можно поудобнее самому написать.

// #2

const findDividers = (arr) => {
  const result = [];
  for (let i = 2; i <= Math.min(...arr); i++) {
    if (arr.every((num) => num % i === 0)) result.push(i);
  }
  return result;
};

// #3
const findPrimes = (min, max) => {
  const checkIsPrime = (num) => {
    let i = 2;
    const loopLength = Math.sqrt(num);
    while (i <= loopLength) {
      if (num % i++ === 0) return false;
    }
    return true;
  };
  let result = [];
  for (let i = min; i <= max; i++) {
    if (checkIsPrime(i)) result.push(i);
  }
  return result;

  // Или так вместо 5 предыдущих строк, но не эффективно, да и не особо коротко
  // return Array(max - min + 1)
  //   .fill()
  //   .map((_, i) => min + i)
  //   .filter(checkIsPrime);
};

// #4
// Можно через массивы, но их нужно будет создать, потом по ним мапиться и джойнить,
// по-моему через строку будет эффективнее

const writeMultTable = (num) => {
  const numLength = num.toString().length;
  let str = '|'.padEnd(numLength + 1, ' ');
  let i = 1;
  let row = 0;
  const padSpace = (number, count) => number.toString().padStart(count, ' ');

  while (i * row <= num * num) {
    const value = row === 0 ? i : i * row;
    const colWidth = (i * num).toString().length + 1;
    str += padSpace(value, colWidth);
    if (i === num && row < num) {
      row++;
      i = 0;
      str += '\n|' + padSpace(row, numLength);
    }
    i++;
  }
  console.log(str);
};

writeMultTable(15);
