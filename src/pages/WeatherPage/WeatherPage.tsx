import {FC, useEffect, useState} from 'react';

import CurrentWeatherWidget from "../../widget/WeatherWidget/WeatherWidget";
import {getCurrentWeather} from "../../feature/weather/getCurrentWeather/getCurrentWeather";
import {useAppDispatch, useAppSelector} from "../../shared/hooks/store";
import {addCurrentWeatherSlice} from "../../entities/currentWeatherSlice/currentWeatherSlice";
import WeatherByHourWidget from "../../widget/WeatherByHourWidget/WeatherByHourWidget";
import {getForecastWeather} from "../../feature/weather/getForecastWeather/getForecastWeather";
import {Loading} from "../../shared/ui/Loading";
import WeatherByDaysWidget from "../../widget/WeatherByDaysWidget/WeatherByDaysWidget";
import {addForecastWeather} from "../../entities/forecastWeatherSlice/forecastWeatherSlice";

import {WeatherPageWrapper} from "./WeatherPage.styled";

const WeatherPage: FC = () => {

  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const {searchValue} = useAppSelector(state => state.searchValueSlice);

  const getCurrentWeatherData = async() => {
   setLoading(true);
   const res = await getCurrentWeather(searchValue);
   const response = await res;
   if (response?.data) {
    dispatch(addCurrentWeatherSlice(response.data));
    setError('');
     setLoading(false);
   }else {
     setError("Sorry we dont have this city in our database");
     setLoading(false);
   }
  } 
  
  const getForecastWeatherData = async() => {
   setLoading(true);
   const res = await getForecastWeather(searchValue);
   const response = await res;
   if (response?.data) {
     dispatch(addForecastWeather(response.data));
    setError('');
     setLoading(false);
   }else {
     setError("Sorry we dont have this city in our database");
     setLoading(false);
   }
  }

  useEffect(() => {
    getCurrentWeatherData();
    getForecastWeatherData();
  },[searchValue])

  if (error) return <div>{error}</div>;
  if (loading) return <Loading/>;

  return (
    <WeatherPageWrapper>
      <CurrentWeatherWidget/>
      <WeatherByHourWidget/>
      <WeatherByDaysWidget/>
    </WeatherPageWrapper>
  );
};

export default WeatherPage;