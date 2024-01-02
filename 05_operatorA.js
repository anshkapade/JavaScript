function squareOfWordLength(n1) {
  console.log(`*Given word is :${n1}`);

  var length = n1.length;
  console.log(`length of given word is :${length}`);

  var lengthSquare = length * length;
  console.log(`Square of length of given word is :${lengthSquare}`);

  return lengthSquare;
}

var squareLength = squareOfWordLength("JavaScript");
var squareLength = squareOfWordLength("Google Chrome");
var squareLength = squareOfWordLength("Developer Smart");

console.log(
  "====================================================================================================="
);
function developer() {
  var string = "I am Angular Developer";
  var length = string.length;
  console.log(`1.Length of String is :${length}`);
  var totalWords = string.split(" ").length;
  console.log(`2.Total no. of words : ${totalWords}`);
  var div = length / totalWords;
  console.log(`3.Division of string length and total no. of words : ${div}`);
  var mul = length * totalWords;
  console.log(
    `4.Multiplication of string length and total no. of words : ${mul}`
  );
}
developer();
