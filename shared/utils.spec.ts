import { expect } from 'chai';
import 'mocha';
import { PrimeUtils } from "./utils";

describe ('isPrime function', () => {

  it('3 is prime number', () => {
    const result = PrimeUtils.isPrime(3);
    expect(result).to.equal(true);
  });

  it('9 is not prime number', () => {
    const result = PrimeUtils.isPrime(9);
    expect(result).to.equal(false);
  });

});

describe ('findPrimeNumberX function', () => {

  it('6th prime number is 13', () => {
    const result = PrimeUtils.findPrimeNumberX(6);
    expect(result).to.equal(13);
  });

  it('10,001th prime number is 104,743', () => {
    const result = PrimeUtils.findPrimeNumberX(10001);
    expect(result).to.equal(104743);
  });

});
