import { AxiosResponse } from "axios";

import {$api} from "../../../ApiInstance";

export const getForecastWeather = async (currentCity: string) => {
  try {
    const response: AxiosResponse = await $api.get(`/forecast?q=${currentCity}&units=metric`, {});
    return response;
  }catch (error) {
    console.log(error);
  }
}