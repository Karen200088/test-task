import { AxiosResponse } from "axios";

import {$api} from "../../../ApiInstance";

export const getCurrentWeather = async (currentCity: string) => {
  try {
    const response: AxiosResponse = await $api.get(`/weather?q=${currentCity}&units=metric`, {});
    return response;
  }catch (error) {
    console.log(error);
  }
}