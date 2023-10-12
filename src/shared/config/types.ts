export enum RoutesEnum {
  HOME = '/',
}

export interface IWeather {
  coord: Coord;
  weather?: (WeatherEntity)[] | null;
  base: string;
  main: Main;
  wind: Wind;
  clouds: Clouds;
  dt: number;
  sys: Sys;
  id: number;
  name: string;
  cod: number;
}
export interface Coord {
  lon: number;
  lat: number;
}
export interface WeatherEntity {
  id: number;
  main: string;
  description: string;
  icon?: string;
}
export interface Main {
  temp: number;
  pressure: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}
export interface Wind {
  speed: number;
  deg: number;
}
export interface Clouds {
  all: number;
}
export interface Sys {
  type: number;
  id: number;
  message: number;
  country: string;
  sunrise: number;
  sunset: number;
}


// =============ForecastWeather



export interface ForecastWeather {
  cod:     string;
  message: number;
  cnt:     number;
  list:    List[];
  city:    City;
}

export interface City {
  id:         number;
  name:       string;
  coord:      Coord;
  country:    string;
  population: number;
  timezone:   number;
  sunrise:    number;
  sunset:     number;
}

export interface Coord {
  lat: number;
  lon: number;
}

export interface List {
  dt:         number;
  main:       MainClass;
  weather:    Weather[];
  clouds:     Clouds;
  wind:       Wind;
  visibility: number;
  pop:        number;
  sys:        Sys;
  dt_txt:     Date;
}

export interface Clouds {
  all: number;
}

export interface MainClass {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  sea_level:  number;
  grnd_level: number;
  humidity:   number;
  temp_kf:    number;
}

export interface Sys {
  pod: Pod;
}

export enum Pod {
  D = "d",
  N = "n",
}

export interface Weather {
  id:          number;
  main:        MainEnum;
  description: Description;
  icon:        Icon;
}

export enum Description {
  BrokenClouds = "broken clouds",
  ClearSky = "clear sky",
  FewClouds = "few clouds",
  OvercastClouds = "overcast clouds",
}

export enum Icon {
  The01D = "01d",
  The01N = "01n",
  The02D = "02d",
  The02N = "02n",
  The04D = "04d",
  The04N = "04n",
}

export enum MainEnum {
  Clear = "Clear",
  Clouds = "Clouds",
}

export interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}

