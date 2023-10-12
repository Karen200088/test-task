import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface temperatureSlice {
  temperature: string
}

const initialState: temperatureSlice = {
  temperature: "metric"
};

const temperatureSlice = createSlice({
  name: "temperatureSlice",
  initialState,
  reducers: {
    changeTemperature(state, action: PayloadAction<string>) {
      state.temperature = action.payload;
    },
  }
});

export const {
  changeTemperature
} = temperatureSlice.actions;
export default temperatureSlice.reducer;
