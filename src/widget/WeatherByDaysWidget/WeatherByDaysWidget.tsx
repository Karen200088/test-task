import {FC} from 'react';

import {useAppSelector} from "../../shared/hooks/store";
import {roundedTemperature} from "../../shared/utils/roundedTemperature";
import {generateIconUrl} from "../../shared/utils/generateIconUrl";

import {WeatherByDayWidget} from "./WeatherByDayWidget.styled";

const WeatherByDaysWidget: FC = () => {

  const {forecastWeather} = useAppSelector(state => state.forecastWeatherSlice);
  console.log(forecastWeather);
  return (
    <WeatherByDayWidget>
      <ul>
        {forecastWeather?.list.map((weatherItem, index) => {
          if (index < 10) {
            return <li key={weatherItem.dt}>
              {weatherItem.dt_txt.toString().split(' ').slice(0, 1) } <br/>
              {weatherItem?.main.temp_min && roundedTemperature(weatherItem?.main.temp_min)} °C
              {weatherItem.weather && <img src={generateIconUrl(weatherItem.weather[0]?.icon)}/>}
            </li>
          }})
        }
      </ul>
    </WeatherByDayWidget>
  );
};

export default WeatherByDaysWidget;