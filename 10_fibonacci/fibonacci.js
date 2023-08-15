const fibonacci = function(comparingNum) {
let fibonacci = [1,1];
// create a 100 fibonacci sequency;
 for (let i = 2; i <= 100; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
      
};

 if (comparingNum < 0) return "OOPS";

return fibonacci[parseInt(comparingNum) - 1];
}
// Do not edit below this line
module.exports = fibonacci;
