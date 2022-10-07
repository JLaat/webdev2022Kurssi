const express = require("express");
const app = express();
app.use(express.json());
const filesync = require("fs");

const port = 3000;

// Datan hakemiseen
app.get("/", (req, res) => {
  const data = filesync.readFileSync("./sanakirja.txt");
  res.send(data);
});

// Datan lisäämiseen
app.post("/", (req, res) => {
  const data = req.body;
  filesync.appendFileSync(
    "./sanakirja.txt",
    `${data.sanat[0].finnish} ${data.sanat[0].english}\n`
  );
  res.json(data.sanat[0]);
});

app.listen(port, () => {
  console.log(`Online at port ${port}`);
});
