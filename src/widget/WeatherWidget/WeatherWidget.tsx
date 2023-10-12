import {FC} from 'react';

import {useAppSelector} from "../../shared/hooks/store";
import {roundedTemperature} from "../../shared/utils/roundedTemperature";


const WeatherWidget: FC = () => {

  const {currentWeather} = useAppSelector(state => state.currentWeatherSlice);

  return (
    <div>
      {currentWeather?.name} -
      {currentWeather?.main.temp_min && roundedTemperature(currentWeather?.main.temp_min)} °C
    </div>
  );
};

export default WeatherWidget;