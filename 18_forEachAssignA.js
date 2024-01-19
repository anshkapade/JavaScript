const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(
  `=======================step 1->print element with index=====================`
);

arrayNumbers.forEach((element, index) => {
  console.log(`element :${element}, its index ${index}`);
});

console.log(
  `=======================step 2->print positive numbers=====================`
);
let numb = ` `;
arrayNumbers.forEach((element) => {
  if (element > 0) {
     numb = numb +"  "+element;
  }
});
console.log(`positive no. are :${numb}`);

console.log(
  `=======================step 3->print negative numbers in new array=====================`
);
const arrayNegative = [];
arrayNumbers.forEach((element) => {
  if (element < 0) {
    arrayNegative.push(element);
  }
});
  console.log(arrayNegative);
  
  

console.log(
  `=======================step 4->print even numbers=====================`
);
let num = ` `;
arrayNumbers.forEach((element) => {
  if (element % 2 == 0) {
      num = num+"  "+ element;
     
  }
});
console.log( `even no.are :${num}`);
console.log(
  `=======================step 5->print sum of all elements=====================`
);
let sum = 0;
arrayNumbers.forEach((element) => {
    
       sum = sum +element;
    
  });
  console.log(`Addition of all elements of array is :${sum}`);

console.log(
  `=======================step 6->print only even indexed value=====================`
);
let line = ` `;
arrayNumbers.forEach((element, index) => {
  if (index % 2 == 0) {
     line = line +" "+element;
  }
});
console.log(`even indexed elements are :${line}`);