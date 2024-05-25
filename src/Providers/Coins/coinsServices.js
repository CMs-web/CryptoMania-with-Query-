import axios from "axios";

export const fetchTrendCoins = async () => {
  try {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending"
    );
    return res.data.coins;
  } catch (error) {
    throw new Error(error.message);
  }
};
export const fetchSingleCoin = async (id) => {
  const res = await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`);
  return res.data;
};
