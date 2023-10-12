import {combineReducers, configureStore} from '@reduxjs/toolkit';

import currentWeatherSlice from "../entities/currentWeatherSlice/currentWeatherSlice";
import searchValueSlice from "../entities/searchCityValue/searchCityValue";
import forecastWeatherSlice from "../entities/forecastWeatherSlice/forecastWeatherSlice";

const rootReducer = combineReducers({
  searchValueSlice,
  currentWeatherSlice,
  forecastWeatherSlice
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;