import express from "express";
import cors from "cors";
import { getConversionData, perDollarCalc } from "./handlers/handlers.js";

const app = express();
const port = 3000;

// middleware
app.use(cors());

app.get("/", (req, res) => {
  async function getData() {
    const obj = await getConversionData();
    res.send({
      btc: {
        price: obj.data.rates.BTC,
        perDollar: perDollarCalc(obj.data.rates.BTC),
      },
      eth: {
        price: obj.data.rates.ETH,
        perDollar: perDollarCalc(obj.data.rates.ETH),
      },
      ltc: {
        price: obj.data.rates.LTC,
        perDollar: perDollarCalc(obj.data.rates.LTC),
      },
      doge: {
        price: obj.data.rates.DOGE,
        perDollar: perDollarCalc(obj.data.rates.DOGE),
      },
    });
  }

  getData();
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
