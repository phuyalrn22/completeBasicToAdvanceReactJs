var person = {
  aryanPhuyal: {
    age: 25,
    role: "instructure",
  },
  bipinGurubg: {
    age: 24,
    role: "student",
  },
  rajKumarOli: {
    age: 23,
    role: "student",
  },
  aayushHumagain: {
    age: 40,
    role: "student",
  },
};

let {
  aryanPhuyal: { age },
} = person;

let {
  bipinGurubg: { age: bipinGurungAge, role },
  rajKumarOli: { age: rajKumarOliAge, role: rajKumarOliRole },
  aayushHumagain: { age: aayushHumagainAge },
} = person;
