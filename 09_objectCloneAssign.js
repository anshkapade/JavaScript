console.log(
  "===================================Step 1======================================"
);
let bankSbi = {
  name: "State bank of India",
  branch: "Pune",
  accountType: "saving",
  balance: 50000,
};
console.log(bankSbi);

console.log(
  "===================================Step 2======================================"
);

let bankLocation = {
  street: "SB road",
  city: "Pune",
  pin: 411052,
};
console.log(bankLocation);

console.log(
  "===================================Step 3======================================"
);

const mergeObj = Object.assign({}, bankSbi, bankLocation);
console.log(mergeObj);

console.log(
  "===================================Step 4======================================"
);

let rateOfInterest = {
  homeLoanInterest: "9.5 % PA",
  personalLoanInterst: "11.6 %PA",
  dueInterest: " 8.9% PA",
};
console.log(rateOfInterest);

console.log(
  "===================================Step 5======================================"
);

const mergeDetails = Object.assign({}, bankSbi, bankLocation, rateOfInterest);

console.table(mergeDetails);

console.log(
  "===================================Step 6======================================"
);

for (const key in mergeDetails) {
  if (Object.hasOwnProperty.call(mergeDetails, key)) {
    const element = mergeDetails[key];
    console.log(`${key}:${element}`);
  }
}
