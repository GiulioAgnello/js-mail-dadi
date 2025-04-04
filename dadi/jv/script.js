// devo creare un numero random per giocatore e uno per pc

const player = Math.floor(Math.random() * 6);
const pcplayer = Math.floor(Math.random() * 6);

console.log(player);
console.log(pcplayer);
// stabilisco il vincitore in base al numero più alto

if (player > pcplayer) {
  alert(
    "Giocatore" +
      " " +
      player +
      " " +
      "Pc" +
      " " +
      pcplayer +
      " " +
      "hai Vinto!!!"
  );
} else if (pcplayer > player) {
  alert(
    "Giocatore" +
      " " +
      player +
      " " +
      "Pc" +
      " " +
      pcplayer +
      " " +
      "hai perso :("
  );
} else if (pcplayer === player) {
  alert(
    "Giocatore" +
      " " +
      player +
      " " +
      "Pc" +
      " " +
      pcplayer +
      " " +
      "Pareggio :/"
  );
}
