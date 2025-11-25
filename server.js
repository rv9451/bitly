import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { nanoid } from "nanoid";
import Url from "./models/url.js";

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/urlShortener")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API to generate short URL
app.post("/api/shorten", async (req, res) => {
  const { originalUrl } = req.body;

  const shortId = nanoid(6);
  const newUrl = await Url.create({ originalUrl, shortId });

  res.json({
    shortUrl: `http://localhost:8000/${shortId}`
  });
});

// Redirect short URL → original URL
app.get("/:shortId", async (req, res) => {
  const url = await Url.findOne({ shortId: req.params.shortId });

  if (!url) return res.status(404).send("URL not found");

  return res.redirect(url.originalUrl);
});

app.listen(8000, () => console.log("Server running on 8000"));
