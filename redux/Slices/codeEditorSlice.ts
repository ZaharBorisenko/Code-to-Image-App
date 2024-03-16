import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Background, Languages, Paddings, Theme } from '@/utils';

type initialStateType = {
  background: string;
  padding: string;
  language: string;
  theme: string;
  icon: any;
};

const initialState: initialStateType = {
  background: Background[1],
  padding: Paddings[0],
  language: Languages[0].name,
  icon: Languages[0].icon,
  theme: Theme[0].name,
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
    setTheme: (state, action: PayloadAction<string>) => {
      state.theme = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
      Languages.map((language, index) => {
        if (language.name === state.language)
          state.icon = Languages[index].icon;
      });
    },
  },
});
export const { setBackground, setPadding, setTheme, setLanguage } =
  codeEditorSlice.actions;
export default codeEditorSlice.reducer;
