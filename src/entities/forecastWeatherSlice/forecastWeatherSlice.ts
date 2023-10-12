import {createSlice} from "@reduxjs/toolkit";

import {ForecastWeather} from "../../shared/config/types";

export interface IInitialState {
  forecastWeather: ForecastWeather | undefined;
}

const initialState:IInitialState = {
  forecastWeather: undefined
};

const forecastWeatherSlice = createSlice({
  name: "forecastWeatherSlice",
  initialState,
  reducers: {
    addForecastWeather(state, action) {
      state.forecastWeather = action.payload;
    },
  }
});

export const {
  addForecastWeather
} = forecastWeatherSlice.actions;
export default forecastWeatherSlice.reducer;