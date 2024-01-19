// import inventory schema
import { Inventory } from "../models/inventory.js";

export async function getInventory(req, res, next) {
  try {
    const inventory = await Inventory.find();
    res.status(200).send({ data: inventory, message: "SUCCESS" });
  } catch (e) {
    next(e);
  }
}

export async function getOneInventory(req, res, next) {
  try {
    const item = await Inventory.findOne({ _id: req.params.id });
    res.status(200).send({ data: item, message: "SUCCESS" });
  } catch (e) {
    next(e);
  }
}

export async function saveInventory(req, res, next) {
  try {
    const newInventory = new Inventory(req.body);
    await newInventory.save();
    res.status(200).send({
      data: newInventory,
      message: "New inventory item successfully added",
    });
  } catch (e) {
    next(e);
  }
}

export async function updateInventory(req, res, next) {
  try {
    // locate inventory + update with req.body
    const updated = await Inventory.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    //   send the updated document with 200 status
    res
      .status(200)
      .send({ data: updated, message: "Successfully updated record" });
  } catch (e) {
    next(e);
  }
}

export async function deleteInventory(req, res, next) {
  try {
    const deleted = await Inventory.findByIdAndDelete(req.params.id);
    res.status(200).send({ data: deleted, message: "SUCCESS" });
  } catch (e) {
    next(e);
  }
}
