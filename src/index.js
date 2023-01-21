export const SequenceC = (A, B) => {
  let C = [];
  const count = {};

  const isPrime = (p) => {
    if (!p || p < 2) return false;
    for (let i = 2; i <= Math.sqrt(p); i++) {
      if (p % i === 0) {
        return false;
      }
    }
    return true;
  };
  // Time complexity O(sqrt(n))

  B.forEach((e) => {
    if (count[e]) {
      count[e] += 1;
      return;
    }
    count[e] = 1;
  });
  //  Time complexity O(n)

  return (C = A.filter((el) => !isPrime(count[el])));
};
