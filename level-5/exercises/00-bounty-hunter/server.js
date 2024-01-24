// CREATE .env FILE WITH MONGODB_CONNECTION_STRING

// import npm modules
import 'dotenv/config'
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bountyRouter from "./router.js";
import morgan from "morgan";

// call function to connect to DB
main().catch((err) => console.log(err));

// Function to connect
async function main() {
  await mongoose.connect(
    process.env.MONGODB_CONNECTION_STRING
  );
}

// instantiate the app
const app = express();

// express.json middleware & cors middleware & morgan logging middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Handle routes
app.use("/bounty", bountyRouter);

// error handling middleware
app.use((err, req, res, next) => {
  res.status(400).send({ error: err });
});

// Listen on port 3002
app.listen(3002, () => console.log(`Server is listening on port 3002`));
