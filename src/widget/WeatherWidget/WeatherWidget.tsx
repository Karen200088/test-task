import {FC} from 'react';

import {useAppSelector} from "../../shared/hooks/store";
import {roundedTemperature} from "../../shared/utils/roundedTemperature";
import {generateIconUrl} from "../../shared/utils/generateIconUrl";

import {WeatherWidgetWrapper} from "./WeatherWidget.styled";

let generatedIconUrl: string;

const WeatherWidget: FC = () => {

  const {currentWeather} = useAppSelector(state => state.currentWeatherSlice);

  if (currentWeather?.weather) {
    generatedIconUrl = generateIconUrl(currentWeather?.weather[0]?.icon);
  }

  return (
    <WeatherWidgetWrapper>
      <h3>{currentWeather?.name}</h3>
      <p>{currentWeather?.main.temp_min && roundedTemperature(currentWeather?.main.temp_min)} °C</p>
      {generatedIconUrl && <img src={generatedIconUrl} alt={currentWeather?.name}/>}
      <p>{currentWeather?.weather && currentWeather?.weather[0].description}</p>
    </WeatherWidgetWrapper>
  );
};

export default WeatherWidget;