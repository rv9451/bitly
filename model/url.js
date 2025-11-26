import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
  originalUrl: String,
  shortId: String,
  click:{ type: Number, default:0},
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Url", urlSchema);