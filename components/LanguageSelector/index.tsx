import React, { FC } from 'react';
import { Languages, selectedLanguageAndIcon } from '@/utils';
import { IconBaseProps } from 'react-icons';
import { SelectSettings } from '@/components';

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
      <p className="mb-2 text-base">Language</p>
      <SelectSettings
        array={Languages}
        value={language}
        onChange={handleLanguageChange}
      />
    </div>
  );
};

export default LanguageSelector;
