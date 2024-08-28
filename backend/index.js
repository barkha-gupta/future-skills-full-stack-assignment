const express = require("express");
const dotenv = require("dotenv");

const PORT = process.env.PORT | 8000;

dotenv.config();
const app = express();

app.get("/ping", (req, res) => {
  res.send("hi there!");
});

app.listen(8000, () => {
  console.log(`server successfully started at ${PORT}`);
});
