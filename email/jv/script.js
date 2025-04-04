// Creo email list

const mailList = [
  // emailpresent = false
  "ron@email.it", // i = 0
  "tom@email.it", // i = 1 emailpresent = true
  "ben@email.it", // i = 2
  "luna@email.it",
  "carlo@email.it",
  "mauri@email.it", // i = 5
];
// console.table(mailList);
// chiedo l'email all'utente
const userMail = prompt("inserisci la tua email"); // tom@email.it

// console.log(mailList.includes(userMail));
let emailpresent = false;
for (i = 0; i < mailList.length; i++) {
  const currentMail = mailList[i];
  if (currentMail === userMail) {
    emailpresent = true;
  }
}

if (emailpresent === true) {
  alert("email presente");
} else {
  alert("email non presente");
}
// Se nell'array ho incontrato la mail stampo "presente", se no stampo "non presente"

console.log(emailpresent);
