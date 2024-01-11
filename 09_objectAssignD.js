let professor = {
  name: "Sadashiv More",
  age: 54,
  subject: "Chemistry",
  city: "Pune",
  designation: "Head of Department",
  degrees: {
    graduation: "Chemistry",
    postGraduation: "Inorganic Chemistry",
    PHD: "Advanced Chemistry",
  },
  certificates: [
    "Certificate in Green Chemistry",
    "Certificate in Advanced Chemistry",
    "Certificate from BARC",
  ],
};

console.log(
  "========================1.Complete Information=========================="
);

console.log(professor);

console.log(
  "========================2.Adding Experience=========================="
);

professor.experience = " 14 years";
console.log(professor);
console.log(`Total Experience is : ${professor.experience}`);

console.log(
  "========================3.Modifying PHD=========================="
);

professor.degrees.PHD = "Advanced Inorganic Chemistry";
console.log(`PHD IN : ${professor.degrees.PHD}`);

console.log(
  "========================4.Adding new certificate at index 2=========================="
);

professor.certificates.splice(2, 0, "Certificate from IISER");
console.log(professor.certificates);

console.log(
  "========================5.Logging last element of array->certificate=========================="
);
let last = professor.certificates[professor.certificates.length - 1];
console.log(`last element of array is :${last}`);

console.log(
  "========================6.Logging complete object on console=========================="
);

console.log(professor);

console.log(
  "========================7.traversing array certificate using loop=========================="
);

for (const key in professor) {
  if (Object.hasOwnProperty.call(professor, key)) {
    const element = professor[key];
    console.log(`${key},${element}`);
  }
}
