#Power digit sum
##Problem 16 
2^15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 2 ^ 1000?

## Note to self
Javascript doesn't support large integers well so we need to use the bignum library which requires microsoft build 
tools and openSSL.

Download and install [OpenSSL](http://slproweb.com/products/Win32OpenSSL.html). Make sure to get Win64 OpenSSL v1.0
.2n (full not light). Don't use any newer version because they lack required things.

Open up command prompt WITH ADMINISTRATOR RIGHTS and run `npm install --global --production windows-build-tools`.

Then `npm install --save bignum`.

