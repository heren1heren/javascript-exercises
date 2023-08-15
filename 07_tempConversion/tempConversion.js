const convertToCelsius = function(FDegree) {
    return CDegree =parseFloat(((FDegree - 32) * 5/9).toFixed(1));
};

const convertToFahrenheit = function(CDegree) {

    return FDegree = parseFloat(((CDegree *9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
