import styled from "styled-components";

import * as palette from '../../shared/styles/Variables';

export const HeaderWrapper = styled.header`
  background: ${palette.SecondColor};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  
  form {
    display: flex;
    gap: 20px;
    input {
      color: #333;
      font-size: 20px;
      margin: 0 auto;
      padding: 5px;
      border-radius: 0.2rem;
      background-color: rgb(255, 255, 255);
      border: none;
      display: block;
      border-bottom: 0.3rem solid transparent;
      transition: all 0.3s;
      width: 350px;
    }
  }
  
  .temperature-switcher {
    font-size: 25px;
    color: whitesmoke;
    input {
      margin-left: 15px;
    }
    label {
      margin-left: 10px;
    }
  }
  
`;

