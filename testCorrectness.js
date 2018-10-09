/* eslint-env mocha, chai */
/* global chai, primeGen */

describe('primeGen(10) must return primes below 10, [2,3,5,7]', function () {
  it('returns 2 as 1st prime', function () {
    let primeArray = [];
    primeArray = primeGen(10); // primeArray should return an array containing [2,3,5,7]
    chai.expect(primeArray[0]).to.equal(2);
  });
  it('returns 3 as 2nd prime', function () {
    let primeArray = [];
    primeArray = primeGen(10);
    chai.expect(primeArray[1]).to.equal(3);
  });
  it('returns 5 as 3rd prime', function () {
    let primeArray = [];
    primeArray = primeGen(10);
    chai.expect(primeArray[2]).to.equal(5);
  });
  it('returns 7 as 4th prime', function () {
    let primeArray = [];
    primeArray = primeGen(10);
    chai.expect(primeArray[3]).to.equal(7);
  });
});

describe('primeGen(20) must return primes below 20, [2,3,5,7,11,13,17,19]', function () {
  it('returns 2 as 1st prime', function () {
    let primeArray = [];
    primeArray = primeGen(20); // primeArray should return an array containing [2,3,5,7,11,13,17,19]
    chai.expect(primeArray[0]).to.equal(2);
  });
  it('returns 3 as 2nd prime', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray[1]).to.equal(3);
  });
  it('returns 5 as 3rd prime', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray[2]).to.equal(5);
  });
  it('returns 7 as 4th prime', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray[3]).to.equal(7);
  });
  it('returns 11 as 5th prime', function () {
    let primeArray = [];
    primeArray = primeGen(20); // primeArray should return an array containing [2,3,5,7,11,13,17,19]
    chai.expect(primeArray[4]).to.equal(11);
  });
  it('returns 13 as 6th prime', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray[5]).to.equal(13);
  });
  it('returns 17 as 7th prime', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray[6]).to.equal(17);
  });
  it('returns 19 as 8th prime', function () {
    let primeArray = [];
    primeArray = primeGen(20);
    chai.expect(primeArray[7]).to.equal(19);
  });
});
