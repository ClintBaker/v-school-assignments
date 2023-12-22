import axios from "axios";

export const getConversionData = async () => {
  const url =
    "http://api.currencylayer.com/live?access_key=c3adb0ef1883607546a09d1ebaf86673";

  const res = await axios.get(`https://cors.vschool.io?url=${url}`);

  return {
    btc: {
      price: res.data.rates.BTC,
      perDollar: 1 / res.data.rates.BTC,
    },
    eth: {
      price: res.data.rates.ETH,
      perDollar: 1 / res.data.rates.ETH,
    },
    ltc: {
      price: res.data.rates.LTC,
      perDollar: 1 / res.data.rates.LTC,
    },
    doge: {
      price: res.data.rates.DOGE,
      perDollar: 1 / res.data.rates.DOGE,
    },
  };
};
