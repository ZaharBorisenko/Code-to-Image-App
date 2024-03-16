import React from 'react';
import { Theme } from '@/utils';
import { SelectSettings } from '@/components';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setTheme } from '@/redux/Slices/codeEditorSlice';

export const ThemeSelector = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(state => state.codeEditorSlice.theme);
  const handleThemeSelector = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    dispatch(setTheme(event.target.value));
  };
  return (
    <div>
      <p className='mb-2 text-base'>Code Theme</p>
      <SelectSettings
        array={Theme}
        value={theme}
        onChange={handleThemeSelector}
      />
    </div>
  );
};
