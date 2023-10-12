import styled from "styled-components";

export const WeatherByHourWidgetWrapper = styled.div`
  
  border: 1px solid #272643;
  padding: 20px;
  border-radius: 7px;
  max-width: 250px;
  margin: 50px auto;
  
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    li {
      display: flex;
      align-items: center;
      border-bottom: 1px solid grey;
    }
  }
`