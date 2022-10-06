const express = require("express");
const app = express();
const filesync = require("fs");

const port = 3000;

app.get("/", (req, res) => {
  const data = filesync.readFileSync("./sanakirja.txt", {
    encoding: "utf8",
    flag: "r",
  });
  res.send(data);
});

app.post("/", (req, res) => {
  const data = req.body;
  filesync.writeFileSync("./sanakirja.txt", data, {
    encoding: "utf8",
    flag: "a+",
    mode: 0o666,
  });
});

app.listen(port, () => {
  console.log(`Online at port ${port}`);
});
