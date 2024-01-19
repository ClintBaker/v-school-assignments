import express from "express";
import {
  createBounty,
  deleteBounty,
  getBounties,
  getOneBounty,
  updatedBounty,
} from "./handlers/bounty.js";

const bountyRouter = express.Router();

// get bounties
bountyRouter.get("/", getBounties);

// get bounty by id
bountyRouter.get("/:id", getOneBounty);

// create bounty
bountyRouter.post("/", createBounty);

// update bounty
bountyRouter.put("/:id", updatedBounty);

// delete bounty
bountyRouter.delete("/:id", deleteBounty);

export default bountyRouter;
