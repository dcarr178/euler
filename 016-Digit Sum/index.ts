// capture start time
const startTime = process.hrtime();
import { Constants, SumUtils } from '../shared/utils';

const bignum = require('bignum');

console.log(`2^15 = ${Math.pow(2, 15)}`);

let x = '1';
console.log(`Sum of digits of ${x} is ${SumUtils.DigitSum(x)}`);
x = '12';
console.log(`Sum of digits of ${x} is ${SumUtils.DigitSum(x)}`);
x = bignum.pow(2, 15).toString();
console.log(`Sum of digits of ${x} is ${SumUtils.DigitSum(x)}`);
x = bignum.pow(2, 1000).toString();
console.log(`Sum of digits of ${x} is ${SumUtils.DigitSum(x)}`);


// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
