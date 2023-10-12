import {combineReducers, configureStore} from '@reduxjs/toolkit';

import currentWeatherSlice from "../entities/currentWeatherSlice/currentWeatherSlice";
import searchValueSlice from "../entities/searchCityValue/searchCityValueSlice";
import forecastWeatherSlice from "../entities/forecastWeatherSlice/forecastWeatherSlice";
import temperatureSlice from "../entities/temperatureSlice/temperatureSlice";

const rootReducer = combineReducers({
  searchValueSlice,
  currentWeatherSlice,
  forecastWeatherSlice,
  temperatureSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;