const debug = false; // turn debug off to minimize console messages
const bignum = require('bignum');

export namespace Constants {
  export const NS_PER_SEC = 1e9;
}

export const debugMsg = (msg: string) => {
  if (debug) console.log(msg);
};

export namespace PrimeUtils {

  export function isPrime(num: number): boolean {

    const limit = Math.sqrt(num); // do not evaluate any numbers greater than the square root of this number

    for (let i = 2; i <= limit; i++) {
      if (num % i === 0) return false; // number is a prime
    }

    return num !== 1; // false if 1, true if anything else
  }

  export const findPrimeNumberX = (numberPrimeNumbersToFind: number): number => {
    // created for project 007

    // initialize variables
    let primeNumbersFound = 1; // 2 is the first prime number so lets skip it
    let currentNumber = 3; // start at three so we can evaluate odd numbers from there

    // loop until we have found enough prime numbers
    do {
      if (isPrime(currentNumber)) {
        primeNumbersFound += 1;

        // display every 1,000th result
        if (primeNumbersFound % 1000 === 1) {
          debugMsg(`${primeNumbersFound}: ${currentNumber}`);
        }

        // exit when limit reached
        if (primeNumbersFound >= numberPrimeNumbersToFind) {
          return currentNumber;
        }

      }

      // only evaluate odd numbers
      currentNumber += 2;

    } while (primeNumbersFound < numberPrimeNumbersToFind);

    return 1;

  };

}

export namespace SumUtils {
  export const countDigits = (n: number) => {
    let count = 0;
    if (n > 1) count += 1;

    while (n / 10 >= 1) {
      n /= 10;
      count += 1;
    }

    return count;
  };

  export const DigitSum = (digits: string): number => {
    let sum = 0;
    const digitArray = digits.split('');
    for (let i = 0; i < digitArray.length; i += 1) {
      const val = parseInt(digitArray[i], 10);
      sum += val;
    }
    return sum;
  };

}
