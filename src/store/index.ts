import { configureStore } from '@reduxjs/toolkit';
import { cardsApi } from './cardsApi';
import searchReducer from './searchSlice';
import formReducer from './formSlice';

const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    search: searchReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
