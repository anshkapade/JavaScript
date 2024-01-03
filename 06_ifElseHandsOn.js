console.log(
  "===============================Step 1================================="
);

var evenOdd = function (n1) {
  if (n1 % 2 == 0) {
    return `Given no. ${n1} is Even`;
  } else {
    return `Given no. ${n1} is Even`;
  }
};
var resultValue = evenOdd(45);
console.log(resultValue);
var resultValue = evenOdd(70);
console.log(resultValue);
var resultValue = evenOdd(67);
console.log(resultValue);
var resultValue = evenOdd(98);
console.log(resultValue);

console.log("===============================Step 2=================================")

var voteEligible = function(age){
    if (age==18) {

        return `age ${age} is eligible for vote.`
        
    } else {
        return `age ${age} is not eligible for vote.`
        
    }

}
var result = voteEligible(18);
console.log(result);
var result = voteEligible(20);
console.log(result);
var result = voteEligible(17);
console.log(result);
var result = voteEligible(40);
console.log(result);
   
console.log("===============================Step 3=================================");

var string = function(n1){

    if (n1.length==10) {

        return `Given String ${n1} contains 10 characters.`;
        
    } else {
       return `Given String ${n1} contains more than 10 characters`;
    }

}
var result = string("JavaScript - ES6");
console.log(result);
 
console.log("===============================Step 4=================================");

var string=function(n1){

    if (n1.startsWith("Java") ){

        return `Given String ${n1} starts with Java`;
        
    } else {
        return `Given String ${n1} do not starts with Java`;
    }

}
var result = string("JavaScript Language");
console.log(result);

