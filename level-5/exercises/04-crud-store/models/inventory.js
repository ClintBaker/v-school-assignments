import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema({
  name: String,
  quantity: Number,
});

export const Inventory = mongoose.model("Inventory", inventorySchema);
