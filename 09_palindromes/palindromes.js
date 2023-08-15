const palindromes = function (str) {
   processedStr = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~\s]/g, '').toLowerCase(); 
    const arr = processedStr.split('');
    let j = arr.length -1;
    for (let i = 0; i <= arr.length - 1; i++) {
      if (arr[i] !== arr[j]) return false;
      j--;
    }
    return true;
}
// Do not edit below this line
module.exports = palindromes;
