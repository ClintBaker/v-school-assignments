import axios from "axios";

export const getConversionData = async () => {
  const res = await axios.get(
    "http://api.currencylayer.com/live?access_key=c3adb0ef1883607546a09d1ebaf86673"
  );

  return res;
};

export const perDollarCalc = (coinPrice) => {
  return 1 / coinPrice;
};
