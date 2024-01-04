
var marriageEligibility=function(gender,age){

     if (gender == "Male" && age >= 21 || gender == "Female" && age >= 18 ) {

         console.log(`${gender},${age} ==> eligible for marriage`);
        
     } else  

        console.log(`${gender},${age} ==> not eligible for marriage`);

}  
marriageEligibility("Male",17);
marriageEligibility("Male",25);
marriageEligibility("Female",28);
marriageEligibility("Female",16);
marriageEligibility("Other",35);
marriageEligibility("Other",41);