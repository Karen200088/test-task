import { AxiosResponse } from "axios";

import {$api} from "../../../ApiInstance";

export const getCurrentWeather = async (currentCity: string, temperature: string) => {
  try {
    const response: AxiosResponse = await $api.get(`/weather?q=${currentCity}&units=${temperature}`, {});
    return response;
  }catch (error) {
    console.log(error);
  }
}