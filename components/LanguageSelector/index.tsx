import React from 'react';
import { Languages } from '@/utils';
import { SelectSettings } from '@/components';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import {setLanguage} from "@/redux/Slices/codeEditorSlice";

export const LanguageSelector = () => {
  const dispatch = useAppDispatch();
  const language = useAppSelector(
    state => state.codeEditorSlice.language,
  );
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value;
    dispatch(setLanguage(selectedLanguage))
  };
  return (
    <div>
      <p className='mb-2 text-base'>Language</p>
      <SelectSettings
        array={Languages}
        value={language}
        onChange={handleLanguageChange}
      />
    </div>
  );
};

export default LanguageSelector;
