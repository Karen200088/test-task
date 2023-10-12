import { AxiosResponse } from "axios";

import {$api} from "../../../ApiInstance";

export const getForecastWeather = async (currentCity: string, temperature: string) => {
  try {
    const response: AxiosResponse = await $api.get(`/forecast?q=${currentCity}&units=${temperature}`, {});
    return response;
  }catch (error) {
    console.log(error);
  }
}