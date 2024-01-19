import { Bounty } from "../models/Bounty.js";

export const getBounties = async (req, res, next) => {
  try {
    const bounties = await Bounty.find();
    res
      .status(200)
      .send({ data: bounties, message: "Successfully retrieved bounties" });
  } catch (e) {
    next(e);
  }
};

export const getOneBounty = async (req, res, next) => {
  try {
    const bounty = await Bounty.findById(req.params.id);
    res
      .status(200)
      .send({ data: bounty, message: "Successfully retrieved bounty" });
  } catch (e) {
    next(e);
  }
};

export const createBounty = async (req, res, next) => {
  try {
    const bounty = await Bounty.create(req.body);
    res
      .status(200)
      .send({ data: bounty, message: "Successfully created bounty" });
  } catch (e) {
    next(e);
  }
};

export const updatedBounty = async (req, res, next) => {
  try {
    const bounty = await Bounty.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res
      .status(200)
      .send({ data: bounty, message: "Successfully updated bounty" });
  } catch (e) {
    next(e);
  }
};

export const deleteBounty = async (req, res, next) => {
  try {
    const bounty = await Bounty.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .send({ data: bounty, message: "Successfully deleted bounty" });
  } catch (e) {
    next(e);
  }
};
