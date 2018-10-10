/* Erik Safford
   Programming Assignment 4: Coding Standards & ESLint
   September 2018
   CS 320
 */
// *********************************************************************************************************************
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

// *********************************************************************************************************************
// maxPrimeSum() takes a threshold number, and returns a two-element array: 1) the prime number which is below
// the threshold and can be written as the sum of the most consecutive primes; and 2)the number of the consecutive
// prime terms.

function maxPrimeSum(threshold) {
  const primes = primeGen(threshold);
  let maxSum = 0;
  let maxRun = 0;
  // Starting from each spot in the primes list, loop through all the primes and find the maxSum (prime) and the maxRun
  // (primes in a row). maxSum and maxRun are potentially updated every loop based on conditions.
  for (let i = 0; i < primes.length; i++) {
    // cumSum is the cumulative sum of primes, want to reset after each iteration
    let cumSum = 0;
    // Starting from spot i, for each spot until the end of the primes list
    for (let j = i; j < primes.length; j++) {
      // Add a cumulative sum of the primes after spot i
      cumSum += primes[j];
      // If the cumulative sum gets to be above the threshold, can't be maxSum, break and start summing from next i
      if (cumSum > threshold) {
        break;
      }
      // If the cumulative sum is prime, can potentially be a new maxSum
      if (isPrime(cumSum) === true) {
        // If the cumulative sum is a number greater then the current maxSum, and if the number of primes added in j
        // minus the cumulative sum starting position i is greater then current maxRun (i.e. new largest maxSum/maxRun)
        if (maxSum < cumSum && maxRun < j - i) {
          // Update new maxRun and maxSum
          maxRun = j - i;
          maxSum = cumSum;
        }
      }
    }
  }
  maxRun++;
  const s1 = 'The prime below the threshold: ';
  const s2 = ', that can be written as the sum of the most consecutive primes is: ';
  const s3 = '. With the the number of consecutive prime terms being: ';
  console.log(s1 + threshold + s2 + maxSum + s3 + maxRun);
  return ([maxSum, maxRun]);
}

const maxSumRun = maxPrimeSum(10000);
console.log(maxSumRun);
