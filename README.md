This project was split into two sections and was written in IntelliJ using JavaScript and ESLint to enforce AirBnB coding standards.

Part 1 dealt with creating functions primeGen():      takes a threshold number and returns a list of prime numbers which are below the
                                                      threshold.
                                     cumulativeSum(): takes a list of numbers and returns a cumulative sum of these numbers.
                                     maxPrimeSUm():   takes a threshold numbers and returns an array containing the prime number which is 
                                                      below the threshold and can be written as the sum of the most consecutive primes and
                                                      the numbers of the consecutive prime terms.
                                                      
Part 2 dealt with writing test suites for the existing prime functions using Mocha (mochajs.org) and Chai (chaijs.com). Here I wrote two
test cases to test each created prime function. Next I looked to optimize my functions to a faster run time by changing the way I was 
calculating prime numbers from the arbitrary way, to an optimized way using the Sieve of Eratosthenes. I then made test suites to compare
run times between the two methods. 
