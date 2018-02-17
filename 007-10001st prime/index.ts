// capture start time
const startTime = process.hrtime();

import { Constants, PrimeUtils } from '@shared/utils';

// run utility
// const primeNumberToFind = 6;
const primeNumberToFind = 10001; // from project 007 assignment
const result = PrimeUtils.findPrimeNumberX(primeNumberToFind);
console.log(`Prime number ${primeNumberToFind} is ${result}`);

// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
