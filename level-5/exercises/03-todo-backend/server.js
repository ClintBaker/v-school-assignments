import express from "express";
import { router } from "./router.js";

// instantiate app
const app = express();

// use json middleware
app.use(express.json());
// use router on todos routes
app.use("/todos", router);

// listen on port 3005
app.listen(3005, () => "app is listening on port 3005");
