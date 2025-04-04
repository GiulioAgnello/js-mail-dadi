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
const userMail = prompt("inserisci la tua email");

// console.log(mailList.includes(userMail));
let currentMail;
for (i = 0; i < mailList.length; i++) {
  const currentMail = [i];
  if (userMail === currentMail) {
    const emailpresent = true;
  }
}
console.log(currentMail);
