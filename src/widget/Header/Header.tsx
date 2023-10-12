import {FC, FormEvent, ChangeEvent, useState} from "react";

import {useAppDispatch, useAppSelector} from "../../shared/hooks/store";
import {searchValue} from "../../entities/searchCityValue/searchCityValueSlice";
import Button from "../../shared/ui/Button/Button";
import {changeTemperature} from "../../entities/temperatureSlice/temperatureSlice";

import {HeaderWrapper} from "./Header.styled";

const Header: FC = () => {

  const [searchInput, setSearchInput] = useState("Yerevan");

  const dispatch = useAppDispatch();

  const {temperature} = useAppSelector(state => state.temperatureSlice);

  const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
  }

  const changeTemperatureHandler = (temperature: string) => {
    dispatch(changeTemperature(temperature));
  }

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(searchValue(searchInput));
  };

  return (
    <HeaderWrapper>
      <div className="search-form">
        <form onSubmit={onSubmitHandler}>
          <input required type="text" value={searchInput} onChange={inputOnChangeHandler}/>
          <Button type="submit">Search City</Button>
        </form>
      </div>

      <div className="temperature-switcher">
        <input
          type="radio"
          id="celsius"
          name="celsius"
          checked={temperature == "metric"}
          onChange={() => changeTemperatureHandler("metric")}/>
        <label htmlFor="celsius">°C</label>

        <input
          type="radio"
          id="fahrenheit"
          name="fahrenheit"
          checked={temperature == "imperial"}
          onChange={() => changeTemperatureHandler("imperial")}/>
        <label htmlFor="fahrenheit">°F</label>
      </div>
    </HeaderWrapper>
  );
};

export default Header;