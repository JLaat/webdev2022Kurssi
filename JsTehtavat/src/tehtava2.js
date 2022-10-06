let personArray = [];

const createNewPerson = (name, number) => {
  return {
    name: name,
    phoneNumber: number,
  };
};

personArray.push(createNewPerson("Matti", 0100100));
personArray.push(createNewPerson("Pekka", 0200100));
personArray.push(createNewPerson("Pertti", 0300100));
personArray.push(createNewPerson("Pirjo", 0400100));

const searchNumber = (array, name) => {
  const person = array.find((person) => person.name === name);
  console.log(person.phoneNumber);
  return person.phoneNumber;
};

const userInterface = () => {
  let userChoice = prompt(
    "Jos haluat lisätä henkilön, kirjoita 1, jos etsiä henkilöä, kirjoita 2:"
  );
  if (userChoice == 1) {
    let newName = prompt("Henkilön nimi: ");
    let newNumber = prompt("Henkilön puhelinnumero: ");
    personArray.push(createNewPerson(newName, newNumber));
    console.log("Lisäys onnistui");
  } else if (userChoice == 2) {
    let nameForSearch = prompt("Haettavan henkilön nimi: ");
    searchNumber(personArray, nameForSearch);
  } else {
    console.log("Käytäthän numeroita 1 tai 2?");
  }
  
  userInterface();
};

userInterface();
