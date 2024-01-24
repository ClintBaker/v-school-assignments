import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

// For inventory routes
import inventoryRouter from "./routes/inventory.js"

// Call function to connect to DB
main().catch((err) => console.log(err))

// Function to connect
async function main() {
  await mongoose.connect(
    process.env.MONGODB
  );
}

// instantiate app
const app = express();

// middleware
app.use(express.json());

// use router for routes behind /inventory
app.use("/inventory", inventoryRouter);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(400).send({ error: err });
});

// listen
app.listen(3005, () => console.log("App is listening on port 3005"));
