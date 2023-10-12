import axios from "axios";

export const $api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params:{
    appid: import.meta.env.VITE_API_KEY
  }
});