"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants;
(function (Constants) {
    Constants.NS_PER_SEC = 1e9;
})(Constants = exports.Constants || (exports.Constants = {}));
var PrimeUtils;
(function (PrimeUtils) {
    function isPrime(num) {
        const limit = Math.sqrt(num); // do not evaluate any numbers greater than the square root of this number
        for (let i = 2; i <= limit; i++) {
            if (num % i === 0)
                return false; // number is a prime
        }
        return num !== 1; // false if 1, true if anything else
    }
    PrimeUtils.isPrime = isPrime;
})(PrimeUtils = exports.PrimeUtils || (exports.PrimeUtils = {}));
