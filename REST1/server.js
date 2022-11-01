const express = require("express");

const app = express();

app.use(express.json());

const filesync = require("fs");

const port = 3000;

let dictionaryLines = [];
let dictionaryWords = [];

const refreshDictionaryLines = () => {
  dictionaryLines = filesync.readFile("./sanakirja.txt", (err) => {
    if (err) throw err;
  });
  if (dictionaryLines.length > 0) {
    dictionaryLines = dictionaryLines.split("\n");
  }
};

const refreshDictionaryWords = () => {
  refreshDictionaryLines();
  if (dictionaryLines.length > 0) {
    dictionarywords = dictionaryLines.map((line) => {
      const sanat = line.split(" ");

      const sana = { finnish: sanat[0], english: sanat[1] };
      return sana;
    });
  } else {
    console.log("Sanoja ei lisätty");
  }
};

// Datan hakemiseen
app.get("/", (req, res) => {
  const sana = req.body.sana;

  console.log(sana);
  res.send(sana);
});

// Datan lisäämiseen
app.post("/", (req, res) => {
  const data = req.body;
  filesync.appendFile(
    "./sanakirja.txt",
    `${data.sanat[0].finnish} ${data.sanat[0].english}\n`,
    (err) => {
      if (err) throw err;
    }
  );
  res.json(data.sanat[0]);
});

app.listen(port, () => {
  console.log(`Online at port ${port}`);
});

refreshDictionaryWords();
