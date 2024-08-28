const express = require("express");
const zod = require("zod");
const { Card } = require("../db");

const router = express.Router();

const cardBody = zod.object({
  title: zod.string(),
  description: zod.string(),
});

router.post("/", async (req, res) => {
  try {
    const { success } = cardBody.safeParse(req.body);
    if (!success) {
      return res.status(400).json({
        message: "Incorrect inputs. Please enter again.",
      });
    }

    const title = req.body.title.trim();

    const existingCard = await Card.findOne({
      title: title,
    });

    if (existingCard) {
      return res.status(409).json({
        message: "Card title already exists!",
      });
    }

    const card = await Card.create({
      title: title,
      description: req.body.description,
    });

    res.json({
      message: "Card successfully created!",
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json({
      cards,
    });
  } catch (error) {
    console.log("Error: " + error);
    res.status(500).json({
      message: "An unexpected error occurred. Please try again later.",
    });
  }
});

module.exports = router;
