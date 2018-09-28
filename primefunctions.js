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
