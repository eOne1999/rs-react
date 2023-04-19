import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ISearch {
  searchValue: string;
}

const initialState: ISearch = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
  },
});

export const setSearchValue = searchSlice.actions;
export default searchSlice.reducer;
