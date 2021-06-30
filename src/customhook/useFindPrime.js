export default function useFindPrime(number) {
  const primeList = [];
  const isPrime = (num) => {
    let count = 2;
    while (count < num / 2 + 1) {
      if (num % count !== 0) {
        count++;
        continue;
      }
      return false;
    }
    return true;
  };

  if (number < 2) {
    return primeList;
  }

  for (let i = 3; i <= number; i++) {
    if (!isPrime(i)) {
      continue;
    }
    primeList.push(i + ",  ");
  }
  return primeList;
}
