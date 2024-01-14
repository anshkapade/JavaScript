function factorialOfWordCount(num) {
  if (num==null || num==undefined||num==NaN)  {
    console.log("invalid input : null");
  }
  let result = 1;
  let word = num.split(" ").length;
  for (let index = 1; index <= word; index++) {
    result = result * index;
  }
   
  console.log(`word count is ${word} and its factorial is ${result}`);
}

factorialOfWordCount("Revision is the mother of success");
factorialOfWordCount("we never fail, we always learn, mind it");
factorialOfWordCount("");
factorialOfWordCount("Anushri Anil Kapade");
factorialOfWordCount(null);
