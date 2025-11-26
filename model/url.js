import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Url", urlSchema);