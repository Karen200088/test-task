import {createSlice} from "@reduxjs/toolkit";

import {IWeather} from "../../shared/config/types";

export interface IInitialState {
  currentWeather: IWeather | undefined;
}

const initialState:IInitialState = {
  currentWeather: undefined
};

const currentWeatherSlice = createSlice({
  name: "currentWeatherSlice",
  initialState,
  reducers: {
    addCurrentWeatherSlice(state, action) {
      state.currentWeather = action.payload;
    },
  }
});

export const {
  addCurrentWeatherSlice
} = currentWeatherSlice.actions;
export default currentWeatherSlice.reducer;