// readline jotta ei tarvita html tiedostoa (ymmärsin jotta ei ollut tarkoitus käyttää?)
const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

r1.question("Syötä haluamasi sana:", sana => {
    let inputReversed = "";
    for(let i = sana.length-1; i >= 0; i--) {
        inputReversed += sana.charAt(i);
    }
    if(sana === inputReversed) {
        console.log("Sana on palindromi");
        return true;
    }
    r1.close();
})

r1.question();