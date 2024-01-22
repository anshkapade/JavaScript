
 
console.log(`=================================palindrome===================================`);
function isPalindrome(word) {
     
    let array = word.split("");
    array.reverse();
    
    let word1 = array.join("");
     
    if (word == word1) {
      console.log(`Given word ${word} is Palindrome`);
    } else {
      console.log(`Given word is ${word} not a Palidrom`);
    }
  }
  isPalindrome("madam");
  console.log(`-----------------------------------------------------------`);
  isPalindrome("dad");
  console.log(`-----------------------------------------------------------`);
  isPalindrome("hello");
  console.log(`-----------------------------------------------------------`);

  console.log(`=================================anagram===================================`);

  let anagram = function (word1, word2) {
    
    console.log(`given 1st string is: "${word1}"`);
    console.log(`given 2st string is: "${word2}"`);
  
    let array1 = word1.split("");
    let array2 = word2.split("");
    array1 = array1.reverse().sort();
    array2 = array2.reverse().sort();
    word1 = array1.join("");
    word2 = array2.join("");
    word1 === word2
      ? console.log(`given Strings are Anagram`)
      : console.log("given Strings are not Anagram");
    console.log(``);
  };
  anagram("silent", "listen");
  anagram("Hello", "World");
  anagram("Such", "much");
  anagram("heart", "earth");
  