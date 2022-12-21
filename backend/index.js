const express = require("express");
const bodyParser = require("body-parser");
const shopping = require("./routes/shopping");

const db = require("./db/index");

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/aaa", (req, res) => {
  res.json({
    aaa: "success",
  });
});

app.use("/shopping", shopping);

app.use((req, res) => res.status(404).send("Sorry, Page not found"));

//start listening
app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;
