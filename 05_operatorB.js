console.log(
  "================================Step 1================================="
);
function greaterNumber(n1, n2) {
  var result = n1 > n2 ? `Greater no.is ${n1}` : `Greater no.is ${n2}`;
  return result;
}
var resultValue = greaterNumber(10, -10);
console.log(resultValue);
var resultValue = greaterNumber(800, 899);
console.log(resultValue);

console.log(
  "================================Step 2================================="
);

function evenOrOdd(n1) {
  var result =
    n1 % 2 == 0 ? `Given no. ${n1} is Even` : `Given no. ${n1} is Odd`;
  return result;
}
var resultValue = evenOrOdd(29);
console.log(resultValue);
var resultValue = evenOrOdd(44);
console.log(resultValue);
var resultValue = evenOrOdd(0);
console.log(resultValue);
var resultValue = evenOrOdd(101);
console.log(resultValue);

console.log(
  "================================Step 3================================="
);

function wordLength(n1) {
  var result =
    n1.length % 2 == 0
      ? `Word length for ${n1} is Even`
      : `Word length for ${n1} is Odd`;
  return result;
}
var resultValue = wordLength("JavaScript");
console.log(resultValue);
var resultValue = wordLength("Developer");
console.log(resultValue);
var resultValue = wordLength("Google");
console.log(resultValue);
