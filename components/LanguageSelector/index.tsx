import React, { FC } from 'react';
import { Languages, selectedLanguageAndIcon } from '@/utils';
import {IconBaseProps} from "react-icons";

type propsType = {
  language: string;
  setLanguage: (language: string) => void;
  setActiveIcon: (activeIcon: IconBaseProps) => void;
};
export const LanguageSelector: FC<propsType> = ({
  language,
  setLanguage,
  setActiveIcon,
}) => {
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const selectedLanguage = event.target.value;
    selectedLanguageAndIcon(
      setLanguage,
      setActiveIcon,
      selectedLanguage,
    );
  };
  return (
    <div>
      <p>Language</p>
      <select value={language} onChange={handleLanguageChange}>
        {Languages.map(l => (
          <option key={l.name} value={l.name}>
            {l.text}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelector;
