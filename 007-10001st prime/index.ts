// capture start time
const startTime = process.hrtime();

import { Constants, PrimeUtils } from '../shared/utils'

// initialize variables
const numberPrimeNumbersToFind = 10001; // from project description
let primeNumbersFound = 1; // 2 is the first prime number so lets skip it
let currentNumber = 3; // start at three so we can evaluate odd numbers from there

// loop until we have found enough prime numbers
do {
  if (PrimeUtils.isPrime(currentNumber)) {
    primeNumbersFound += 1;

    // display every 1,000th result
    if (primeNumbersFound % 1000 === 1) {
      console.log(`${primeNumbersFound}: ${currentNumber}`);
    }
  }
  currentNumber += 2; // only evaluate odd numbers
} while (primeNumbersFound < numberPrimeNumbersToFind);

// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
