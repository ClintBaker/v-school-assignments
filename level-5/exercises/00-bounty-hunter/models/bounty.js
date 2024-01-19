import mongoose from "mongoose";

const bountySchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  living: {
    type: Boolean,
    default: true,
  },
  bountyAmount: Number,
  type: {
    type: String,
    enum: ["sith", "jedi"],
    default: "sith",
  },
});

export const Bounty = mongoose.model("Bounty", bountySchema);
