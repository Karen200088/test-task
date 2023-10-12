import {ChangeEvent, FC, FormEvent, useState} from "react";

import {useAppDispatch} from "../../shared/hooks/store";
import {searchValue} from "../../entities/searchCityValue/searchCityValue";

import {HeaderWrapper} from "./Header.styled";

const Header: FC = () => {

  const [searchInput, setSearchInput] = useState("Yerevan");
  const [temperature, setTemperature] = useState("celsius");

  const dispatch = useAppDispatch();

  const inputOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
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
          <button type="submit">Search City</button>
        </form>
      </div>

      <div className="temperature-switcher">
        <input type="radio" id="celsius" name="celsius" defaultChecked checked={temperature == "celsius"}/>
        <label htmlFor="celsius">Celsius</label>

        <input type="radio" id="fahrenheit" name="fahrenheit" checked={temperature == "fahrenheit"}/>
        <label htmlFor="fahrenheit">Fahrenheit</label>
      </div>
    </HeaderWrapper>
  );
};

export default Header;