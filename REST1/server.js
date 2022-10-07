const express = require("express");
const app = express();
app.use(express.json());
const filesync = require("fs");

const port = 3000;

// Datan hakemiseen
app.get("/", (req, res) => {
  const data = filesync.readFile("./sanakirja.txt");
  res.send(data);
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
