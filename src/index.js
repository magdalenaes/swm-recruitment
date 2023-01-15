export const SequenceC = (A, B) => {
  let C = [];
  const count = {};
  const result = [];

  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  B.forEach((e) => {
    if (count[e]) {
      count[e] += 1;
      return;
    }
    count[e] = 1;
  });

  for (let p in count) {
    if (count[p] >= 2 && isPrime(count[p])) {
      result.push(Number(p));
    }
  }

  return (C = A.filter((item) => !result.includes(item)));
};