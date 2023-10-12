import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface searchValueType {
  searchValue: string
}

const initialState: searchValueType = {
  searchValue: "Yerevan"
};

const searchValueSlice = createSlice({
  name: "searchValueSlice",
  initialState,
  reducers: {
    searchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
  }
});

export const {
  searchValue
} = searchValueSlice.actions;
export default searchValueSlice.reducer;
