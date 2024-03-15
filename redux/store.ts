import { configureStore } from '@reduxjs/toolkit';
import codeEditorSlice from './Slices/codeEditorSlice';

export const store = configureStore({
  reducer: {
    codeEditorSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
