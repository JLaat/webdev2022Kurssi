let henkilot = [];

// Henkilo objektin konstruktori
function Henkilo(nimi, numero) {
  this.nimi = nimi;
  this.numero = numero;
}

// Metodit
const lisaaHenkilo = () => {
  let nimi = document.getElementById("name").value;
  let numero = document.getElementById("number").value;

  henkilot.push(new Henkilo(nimi, numero));
  naytaKaikkiHenkilot();
};

const naytaKaikkiHenkilot = () => {
  let table = document.querySelector("tbody");
  // Tyhjennetään table
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }
  // Uusi rivi joka henkilölle
  for (let i = henkilot.length; i >= 0; i--) {
    let rivi = document.createElement("tr");

    let henkilo = henkilot[i];

    for (let j in henkilo) {
      let cellData = document.createElement("td");
      cellData.appendChild(document.createTextNode(henkilo[j]));
      rivi.appendChild(cellData);
    }
    table.appendChild(rivi);
  }
};

const etsiHenkilo = () => {
  let table = document.querySelector("tbody");
  let haettavaNumero = document.getElementById("searchNumber").value;

  // Tyhjennetään table
  while (table.firstChild) {
    table.removeChild(table.lastChild);
  }

  // Katsotaan löytyykö haluttua henkilöä
  if (henkilot.filter((e) => e.numero == haettavaNumero).length > 0) {
    console.log("Löytyi");
    let rivi = document.createElement("tr");
    let henkilo = henkilot.find((e) => e.numero == haettavaNumero);

    // Jos löytyy, lisätään domiin
    for (let i in henkilo) {
      let cellData = document.createElement("td");
      cellData.appendChild(document.createTextNode(henkilo[i]));
      rivi.appendChild(cellData);
    }
    table.appendChild(rivi);
    return henkilo.numero;
  } else {
    console.log("ei löytyny");
  }
};

const jorma = new Henkilo("Jorma", 111);
const pertti = new Henkilo("Pertti", 112);
const irma = new Henkilo("Irma", 113);

henkilot.push(jorma, pertti, irma);

naytaKaikkiHenkilot();
