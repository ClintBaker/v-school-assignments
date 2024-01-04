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

// express.json middleware
app.use(express.json());

// Handle routes
app.get("/bounty", (req, res) => {
  console.log("GET /bounty 200 SUCCESS");

  res.send({ data: bounties });
});

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

// Listen on port 3002
app.listen(3002, () => console.log(`Server is listening on port 3002`));
