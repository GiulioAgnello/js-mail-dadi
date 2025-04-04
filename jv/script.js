// Creo email list

const mailList = [
  "ron@email.it",
  "tom@email.it",
  "ben@email.it",
  "luna@email.it",
  "carlo@email.it",
  "mauri@email.it",
];
// console.table(mailList);
// chiedo l'email all'utente
let letouttext;
userMail = prompt("inserisci la tua email");

// cerco nell'array dell'email se presente

for (let i = 0; i < mailList.langht; i++) {
  currentmail = [i];
  if (mailList === userMail) {
    letouttext = "presentes";
  } else {
    letouttext = "email non presente";
  }
}
console.log(mailList);
