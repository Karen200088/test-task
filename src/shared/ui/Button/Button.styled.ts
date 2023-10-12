import styled from "styled-components";

import * as palette from "../../styles/Variables";

export const ButtonStyled = styled.button`
  text-align: center;
  font-size: 21px;
  font-weight: 600;
  padding: 10px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  background: ${palette.MainColor};
  color: #eaeaea;
  transition: 0.2s;

  &:hover {
    background: #e28913;
  }
`