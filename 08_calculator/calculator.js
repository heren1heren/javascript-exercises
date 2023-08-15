const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	// sum of the array
  let sum = 0; 
 for (let i = 0; i <= arr.length -1; i++) {
    sum += arr[i];
 }
  return sum;
};

const multiply = function(...num) {
  // don't know how much nums we have so can't use for..i loop
  let result = 1;
  for ( let  n of num) {
    result *= n;
  }
        
  return result;

};

const power = function(base, exponent) {
  let result = 1;
  for (i =1 ; i<= exponent; i++) {
    result *= base;
  }  
 return result;
	
};

const factorial = function(n) {
	let result = 1;
  for( i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
