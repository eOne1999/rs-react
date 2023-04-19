import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TFormData } from '../types';

interface IForm {
  formCards: TFormData[];
}

const initialState: IForm = {
  formCards: [],
};

const formSlice = createSlice({
  name: 'formSlice',
  initialState,
  reducers: {
    setFormCard: (state, action: PayloadAction<TFormData>) => {
      state.formCards.push(action.payload);
    },
  },
});

export const setFormCard = formSlice.actions;
export default formSlice.reducer;
