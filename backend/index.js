const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const rootRouter = require("./routes/index");
const cors = require("cors");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;
const MONGO_URI = process.env.MONGO_URI;

app.use(cors());
app.use(express.json());
app.use("/api", rootRouter);

app.get("/", (req, res) => {
  res.send("hi there!");
});

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("connected to db successfully"))
  .catch((error) => console.log("error in connected to db: " + error));

app.listen(PORT, () => {
  console.log(`server successfully started at ${PORT}`);
});
