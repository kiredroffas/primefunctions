// isPrime returns true if num is prime, false if num is composite. Used in primeGen() and maxPrimeSum()

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return (true);
}

// *********************************************************************************************************************
// primeGen() takes a threshold number,and returns a list of prime numbers which are below that threshold.

function primeGen(threshold) {
  // primeList will hold all the numbers that are determined to be prime
  const primeList = [];
  // Determine which numbers below the threshold are prime and add to primeList
  for (let i = 0; i <= threshold; i++) {
    if (isPrime(i) === true) {
      primeList.push(i);
    }
  }
  const str = 'primeGen(';
  const str1 = ') -> ';
  console.log(str + threshold + str1 + primeList);
  return (primeList);
}

const primeList = primeGen(10);
console.log(primeList);

// *********************************************************************************************************************
// cumulativeSum() takes a list of numbers, and returns the cumulative sum of these numbers.

function cumulativeSum(numList) {
  // sumList will hold the calculated sums from numList
  const sumList = [];
  let sumCounter = 0;
  for (let i = 0; i < numList.length; i++) {
    sumCounter += numList[i];
    sumList.push(sumCounter);
  }
  const str = 'cumulativeSum(';
  const str1 = ') -> ';
  console.log(str + numList + str1 + sumList);
  return (sumList);
}

// Return a cumulative sum of the numbers
const numList = [1, 2, 3, 4];
const sumList = cumulativeSum(numList);
console.log(sumList);
