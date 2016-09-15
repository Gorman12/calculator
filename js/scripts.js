var add = function(number1, number2){
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
  var number1 = parsInt(prompt("Enter a number"));
  var number2 = parsInt(prompt("Enter another number"));

  alert(add(number1, number2));
});
