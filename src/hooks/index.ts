import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';
import { AppDispatch, RootState } from '../store';
import { setSearchValue } from '../store/searchSlice';
import { setFormCard } from '../store/formSlice';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useActions = () => {
  const dispatch = useAppDispatch();
  return bindActionCreators({ ...setSearchValue, ...setFormCard }, dispatch);
};

export const selectSearchValue = (state: RootState) => state.search.searchValue;
