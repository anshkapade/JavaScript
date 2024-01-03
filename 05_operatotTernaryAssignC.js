
console.log("===================================Step 1=========================================");
function maleMarriageEligibility(gender,age,boyName){
    var result= gender=="male"&&age>=21?
    `hey${boyName} you are eligible for marriage`:
    `hey ${boyName} you are eligible not for marriage`;
    console.log(result);
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steve Jobs");

console.log("===================================Step 2=========================================");

function femaleMarriageEligibility(gender,age,girName){
    var result = gender=="Female"&&age==18?
    `hey ${girName} you are eligible for marriage`:
    `hey ${girName} you are eligible not for marriage`;
    console.log(result);

}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");