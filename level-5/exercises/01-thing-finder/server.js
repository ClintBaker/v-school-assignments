import express from "express";
import { inventoryItems } from "./data.js";

const app = express();

app.get("/things", (req, res) => {
  if (req.query.type) {
    const queryArray = inventoryItems.filter(
      (item) => item.type === req.query.type
    );
    res.send({ data: queryArray });
  } else {
    res.send({ data: inventoryItems });
  }
});

app.get("/thingsprice", (req, res) => {
  if (req.query.max && req.query.min) {
    const queriedItems = inventoryItems.filter(
      (item) => item.price >= req.query.min && item.price <= req.query.max
    );

    res.send({ data: queriedItems });
  } else {
    res.send({ data: inventoryItems });
  }
});

app.listen(3003, () => console.log("app is listening on port 3003"));
