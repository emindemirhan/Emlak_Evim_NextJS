import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const {data} = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': 'f807de3b1fmsh356a7ce40e67564p147762jsn7f1f31fc361f',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });


return data;

};


