

function factorialOfNum(num){
    if (num==null || num==undefined||num==NaN) {

        return `invalid input : ${num}`;
        
    }
    if (num==0 ||num ==1) {
        return 1;
    }
       let result = 1;
      for (let index = 1; index <=num; index++) {
         result = result * index;
        
      }

    return result;
}
let res = factorialOfNum(5);
console.log(`factorial of 5 : ${res}`);
let res1 = factorialOfNum(3);
console.log(`factorial of 3 : ${res1}`);
let res2 = factorialOfNum(null);
console.log(res2);
let res3 = factorialOfNum(8);
console.log(`factorial of 8 : ${res3}`);
let res4 = factorialOfNum(undefined);
console.log(res4);
let res5 = factorialOfNum(9);
console.log(`factorial of 9 : ${res5}`);
let res6 = factorialOfNum(0);
console.log(`factorial of 0 : ${res6}`);