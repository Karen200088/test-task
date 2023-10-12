import {FC} from 'react';

import {useAppSelector} from "../../shared/hooks/store";
import {roundedTemperature} from "../../shared/utils/roundedTemperature";

const WeatherByHourWidget: FC = () => {

  const {forecastWeather} = useAppSelector(state => state.forecastWeatherSlice);

  return (
    <div>
      <ul>
        {forecastWeather?.list.map((weatherItem, index) => {
          if (index < 10) {
          return <li key={weatherItem.dt}>
            {weatherItem.dt_txt.toString().split(' ').slice(1).join(' ')} -
            {weatherItem?.main.temp_min && roundedTemperature(weatherItem?.main.temp_min)} °C
          </li>
        }})
        }
      </ul>
    </div>
  );
};

export default WeatherByHourWidget;