/*
1. GET a list of all bounties
2. POST new bounties
3. DELETE a bounty
4. PUT a bounty

Bounty obj:
{
    firstName: "",
    lastName: "",
    living: true,
    bountyAmount: 256,
    type: "Sith or Jedi",
    _id: "23040-$223458"
}

PT 1:
1. GET all bounties
2. POST that adds a new bounty


*/

// import npm modules
import { v4 as uuidv4 } from "uuid";
import express from "express";
import cors from "cors";

// instantiate the app
const app = express();

// define dummy data
let bounties = [
  {
    firstName: "jimmy",
    lastName: "crooks",
    living: true,
    bountyAmount: 33599923,
    type: "sith",
    _id: uuidv4(),
  },
  {
    firstName: "johnny",
    lastName: "bling",
    living: true,
    bountyAmount: 52599923,
    type: "jedi",
    _id: uuidv4(),
  },
];

// express.json middleware & cors middleware
app.use(express.json());
app.use(cors());

// Handle routes
// Get bounties
app.get("/bounty", (req, res) => {
  console.log("GET /bounty 200 SUCCESS");

  res.send({ data: bounties });
});

// create bounty
app.post("/bounty", (req, res) => {
  console.log("POST /bounty 200 SUCCESS");

  const newBounty = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    living: true,
    bountyAmount: req.body.bountyAmount,
    type: req.body.type,
    _id: uuidv4(),
  };

  bounties.push(newBounty);

  res.send({ message: "bounty successfully created", data: newBounty });
});

// edit a bounty
app.put("/bounty/:id", (req, res) => {
  const bountyIndex = bounties.findIndex(
    (bounty) => bounty._id === req.params.id
  );

  if (bountyIndex !== -1) {
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body);

    res.send({ data: updatedBounty });
  } else {
    res.status(400).send({ message: "bad request" });
  }
});

// delete a bounty
app.delete("/bounty/:id", (req, res) => {
  const bountyIndex = bounties.findIndex(
    (bounty) => bounty._id === req.params.id
  );

  if (bountyIndex !== -1) {
    // remove the bounty from our array
    bounties.splice(bountyIndex, 1);
    res.send({
      message: "Successfully deleted bounty",
      data: bounties[bountyIndex],
    });
  } else {
    // send error
    res.status(400).send({ message: "bad request" });
  }
});

// Listen on port 3002
app.listen(3002, () => console.log(`Server is listening on port 3002`));
