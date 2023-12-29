
function stringHandsOn(){
     var givenString = "    hey you are doing good, keep it up    "
      
     console.log(`1.Given String is : ${givenString}`);

     console.log(`2.Length of String is : ${givenString.length}`);

     var newString = givenString.trim();

     console.log(`3.String after trim is : ${newString}`);

     console.log(`4.Total words available in string is : ${newString.length}`);

     var extraSpace = givenString.length - newString.length;

     console.log(`5.Total no. of extra space removed : ${extraSpace}`);

     var firstChar = newString.charAt(0);
     var lastChar = newString.charAt(newString.length-1);

     console.log(`6. First char :${firstChar},   * Last char :${lastChar}`);

    console.log(`7.Index of good is : ${newString.lastIndexOf('g')}`);

     console.log(`8.Substring starting from index 22 is (by substring):${newString.substring(22)}`);
     console.log(`Substring starting from index 22 is (by slice):${newString.slice(22)}`);
    

      console.log(`9.is string ends with "up":${newString.endsWith('up')}`);
      console.log(`10.is string starts with "hey":${newString.startsWith('hey')}`);


     
 








}
stringHandsOn();