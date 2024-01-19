import express from "express";

// import inventory schema
import { Inventory } from "../models/inventory.js";
// handlers database interface functions
import {
  deleteInventory,
  getInventory,
  getOneInventory,
  saveInventory,
  updateInventory,
} from "../handlers/inventory.js";

// create a router
const inventoryRouter = express.Router();

// get all
inventoryRouter.get("/", (req, res, next) => {
  getInventory(req, res, next);
});

// get one
inventoryRouter.get("/:id", (req, res, next) => {
  getOneInventory(req, res, next);
});

// create inventory
inventoryRouter.post("/", (req, res, next) => {
  saveInventory(req, res, next);
});

// edit inventory
inventoryRouter.put("/:id", (req, res, next) => {
  updateInventory(req, res, next);
});

inventoryRouter.delete("/:id", (req, res, next) => {
  deleteInventory(req, res, next);
});

export default inventoryRouter;
