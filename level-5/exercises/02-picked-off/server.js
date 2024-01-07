import express from "express";
import { middleware } from "./middleware.js";

const app = express();

app.use(middleware);

app.get("/", (req, res) => {
  res.send({
    _id: "1249058230",
    name: "unidentified object",
    property: "This is a prop",
    body: req.body,
  });
});

app.listen(3004, () => "server is listening on port 3004");
