import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "2bf1992c16msh82bfbb71d98695dp1b036cjsn33bb68b6432e",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });


return data;

};


