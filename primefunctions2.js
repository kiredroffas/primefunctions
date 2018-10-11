/* Erik Safford
   Programming Assignment 4: Coding Standards & ESLint
   Version 2 - Optimized
   September 2018
   CS 320
 */
// *********************************************************************************************************************
// Sieve of Eratosthenes Optimization algorithm
// finds all primes below given threshold number, used in primeGen() and maxPrimeSum()

function SoE(num) {
  const array = [];
  const threshold = Math.sqrt(num);
  const primeList = [];

  // Make an array from 2 to (n - 1)
  for (let i = 0; i < num; i++) {
    array.push(true);
  }
  // Set multiples of primes starting from 2, 3, 5... in array to false (not prime)
  for (let i = 2; i <= threshold; i++) {
    if (array[i]) {
      for (let j = i * i; j < num; j += i) {
        array[j] = false;
      }
    }
  }
  //  Go through array of numbers, pushing a value to the primeList only if it is marked true (prime)
  for (let i = 2; i < num; i++) {
    if (array[i]) {
      primeList.push(i);
    }
  }
  return primeList;
}

// *********************************************************************************************************************
// primeInList takes a list of prime numbers and a cumulative total, and checks to see if the total is in the list

function primeInList(primeList, cumSum) {
  for (let i = 0; i < primeList.length; i++) {
    if (primeList[i] === cumSum) {
      return true;
    }
  }
  return false;
}

// *********************************************************************************************************************
// primeGen() takes a threshold number,and returns a list of prime numbers which are below that threshold.

function primeGen(threshold) {
  // primeList will hold all the numbers that are determined to be prime
  // Determine which numbers below the threshold are prime using optimized prime generation (Sieve of Eratosthenes)
  const primeList = SoE(threshold);
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
  const primes = SoE(threshold);
  let maxSum = 0;
  let maxRun = 0;
  const pLength = primes.length;
  // Starting from each spot in the primes list, loop through all the primes and find the maxSum (prime) and the maxRun
  // (primes in a row). maxSum and maxRun are potentially updated every loop based on conditions.
  for (let i = 0; i < pLength; i++) {
    // cumSum is the cumulative sum of primes, want to reset after each iteration
    let cumSum = 0;
    // Starting from spot i, for each spot until the end of the primes list
    for (let j = i; j < pLength; j++) {
      // Add a cumulative sum of the primes after spot i
      cumSum += primes[j];
      // If the cumulative sum gets to be above the threshold, can't be maxSum, break and start summing from next i
      if (cumSum > threshold) {
        break;
      }
      // If the cumulative sum is prime, can potentially be a new maxSum
      if (primeInList(primes, cumSum) === true && maxSum < cumSum && maxRun < j - i) {
        // Update new maxRun and maxSum
        maxRun = j - i;
        maxSum = cumSum;
      }
    }
  }
  maxRun++;
  return ([maxSum, maxRun]);
}

const maxSumRun = maxPrimeSum(10);
console.log(maxSumRun);
