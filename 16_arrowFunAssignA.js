
console.log(`========================Step 1===========================`);
const str = () =>{
    console.log(`Good Morning, Today is "Thursday".`);
}
str();

console.log(`========================Step 2===========================`);
const mul = (n1,n2,n3=1) =>{
    const res = n1*n2*n3;
    console.log(`multiplication is : ${res}`);
}
mul(5,5,2);
mul(10,4)


console.log(`========================Step 3===========================`);
const add = (n1,n2,n3,n4,n5) => {
    return n1 + n2 + n3 + n4 + n5;
}
const returnValue = add(100,100,200,349,756);
console.log(`Addition is: ${returnValue}`);
const returnValue1 = add("I am"," learning ","ES6 ","feature ","in depth");
console.log(`Addition is: ${returnValue1}`)