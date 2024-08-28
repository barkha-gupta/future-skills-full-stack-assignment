const express = require("express");
const cardRouter = require("./card");

const router = express.Router();
router.use("/cards", cardRouter);

module.exports = router;
