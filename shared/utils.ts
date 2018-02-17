export namespace Constants {
  export const NS_PER_SEC = 1e9;
}

export namespace PrimeUtils {

  export function isPrime(num: number): boolean {

    const limit = Math.sqrt(num); // do not evaluate any numbers greater than the square root of this number

    for (let i = 2; i <= limit; i++) {
      if (num % i === 0) return false; // number is a prime
    }

    return num !== 1; // false if 1, true if anything else
  }

}