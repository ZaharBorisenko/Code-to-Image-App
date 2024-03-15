import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {Background, Languages, Paddings} from '@/utils';

type initialStateType = {
  background: string;
  padding: string;
  language: string;
};

const initialState: initialStateType = {
  background: Background[1],
  padding: Paddings[0],
  language: Languages[0].name,
};

export const codeEditorSlice = createSlice({
  name: 'codeEditor',
  initialState,
  reducers: {
    setBackground: (state, action: PayloadAction<string>) => {
      state.background = action.payload;
    },
    setPadding: (state, action: PayloadAction<string>) => {
      state.padding = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});
export const { setBackground, setPadding, setLanguage } = codeEditorSlice.actions;
export default codeEditorSlice.reducer;
