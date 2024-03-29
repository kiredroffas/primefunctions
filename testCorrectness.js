/* Test Suite 1 - Correctness */

// ---------------------------------------------------------------------------------------------------------------------
/* eslint-env mocha, chai */
/* global chai, primeGen */

// primeGen() test cases
describe('primeGen', function () {
  it('primeGen(10) = [2, 3, 5, 7]', function () {
    let primeArray = [];
    primeArray = primeGen(10);
    chai.expect(primeArray).deep.equal([2, 3, 5, 7]);
  });
  it('primeGen(20) = [2, 3, 5, 7, 11, 13, 17, 19]', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray).deep.equal([2, 3, 5, 7, 11, 13, 17, 19]);
  });
});

// ---------------------------------------------------------------------------------------------------------------------
/* eslint-env mocha, chai */
/* global chai, cumulativeSum */

// cumulativeSum() test cases
describe('cumulativeSum', function () {
  it('cumulativeSum([1, 2, 3, 4]) = [1, 3, 6, 10]', function () {
    let sumArray = [];
    sumArray = cumulativeSum([1, 2, 3, 4]);
    chai.expect(sumArray).deep.equal([1, 3, 6, 10]);
  });
  it('cumulativeSum([10, 11, 12, 13, 14]) = [10, 21, 33, 46, 60]', function () {
    let sumArray = [];
    sumArray = cumulativeSum([10, 11, 12, 13, 14]);
    chai.expect(sumArray).deep.equal([10, 21, 33, 46, 60]);
  });
});

// ---------------------------------------------------------------------------------------------------------------------
/* eslint-env mocha, chai */
/* global chai, maxPrimeSum */

// maxPrimeSum() test cases
describe('maxPrimeSum', function () {
  it('maxPrimeSum(100) = [41, 6]', function () {
    let MPSarray = [];
    MPSarray = maxPrimeSum(100);
    chai.expect(MPSarray).deep.equal([41, 6]);
  });
  it('maxPrimeSum(1000) = [953, 21]', function () {
    let MPSarray = [];
    MPSarray = maxPrimeSum(1000);
    chai.expect(MPSarray).deep.equal([953, 21]);
  });
});
