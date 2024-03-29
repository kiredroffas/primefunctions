/* Test Suite 2 - Performance */

// ---------------------------------------------------------------------------------------------------------------------
/* eslint-env mocha, chai */
/* global chai, maxPrimeSum */

// maxPrimeSum() test cases
describe('maxPrimeSum', function () {
  this.slow(0); // will generate red flag of execution time every execution
  this.timeout(25); // will timeout(fail) if run time exceeds 20ms
  it('maxPrimeSum(10000) = [9521, 65]', function () {
    let MPSarray = [];
    MPSarray = maxPrimeSum(10000);
    chai.expect(MPSarray).deep.equal([9521, 65]);
  });
  this.slow(0);
  this.timeout(550);
  it('maxPrimeSum(100000) = [92951, 183]', function () {
    let MPSarray = [];
    MPSarray = maxPrimeSum(100000);
    chai.expect(MPSarray).deep.equal([92951, 183]);
  });
});
