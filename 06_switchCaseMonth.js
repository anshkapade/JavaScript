function month(monthNum) {
  switch (monthNum) {
    case 1:
      console.log(`Month Number ${1} ==> January`);
      break;

    case 2:
      console.log(`Month Number ${2} ==> February`);
      break;

    case 3:
      console.log(`Month Number ${3} ==> March`);
      break;

    case 4:
      console.log(`Month Number ${4} ==> April`);
      break;

    case 5:
      console.log(`Month Number ${5} ==> May`);
      break;

    case 6:
      console.log(`Month Number ${6} ==> June`);
      break;

    case 7:
      console.log(`Month Number ${7} ==> July`);
      break;

    case 8:
      console.log(`Month Number ${8} ==> August`);
      break;

    case 9:
      console.log(`Month Number ${9} ==> September`);
      break;

    case 10:
      console.log(`Month Number ${10} ==> October`);
      break;

    case 11:
      console.log(`Month Number ${11} ==> November`);
      break;

    case 12:
      console.log(`Month Number ${12} ==> December`);
      break;

    default:
      console.log(`Invalid Input --> Month Number ${monthNum}`);
      break;
  }
}
month(0);
month(2);
month(5);
month(12);
month(15);
month(100);
month(null);
month(undefined);
