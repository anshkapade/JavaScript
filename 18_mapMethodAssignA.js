console.log(`======================1.print new array after adding 10 in each array element==========================`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19]

 
const newArray = arrayNumbers.map((element)=>{
           return element+10;
})
console.log(newArray);

console.log(`======================2.cube each array element==========================`);
const newArr = arrayNumbers.map((element)=>{
    return element*element*element;
})
console.log(newArr);

console.log(`======================3.add index value to corresponding array element==========================`);
const newArray1 = arrayNumbers.map((element,index)=>{
     return element+index;
     
})
console.log(newArray1);
