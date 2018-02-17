const debug = false; // turn debug off to minimize console messages

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