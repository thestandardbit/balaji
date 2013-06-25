#!/usr/bin/env node

// Prime 

// prints the first 100 prime numbers
var num_primes = 100;

// determines if a number is prime
var isPrime = function(n) {
	var primality = false;
	if(n < 2) { return false; }
	else if(n == 2) { return true; }
	else {
		for(i = 2; i < n; i++) {
			if((n%i) == 0) { return false; }
		};
		// if n has not been divisible by any number tested it is prime
		return true;
	};
};

// Return first k primes as array
var getPrimes = function(k) {
	var prime_arr = [];
	j = 1;
	while(prime_arr.length < k) {
		//console.log("Testing if " + j + " is prime");
		if(isPrime(j)) {
			prime_arr.push(j);
			console.log("Added #" + prime_arr.length + " : " + j);
		};
		j++;
	};
	return prime_arr;
};

// Returns array as comma seperated string
var comma = function(arr) {
	return arr.join(",");
};

// Print to file
var fs = require('fs');
var outfile = "prime.txt";
var out = comma(getPrimes(num_primes));
fs.writeFileSync(outfile, out);
