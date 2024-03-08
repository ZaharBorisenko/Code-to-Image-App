import React from 'react';
import { Theme } from '@/utils';
import { SelectSettings } from '@/components';

export const ThemeSelector = ({
  theme,
  setTheme,
}: {
  theme: string;
  setTheme: (theme: string) => void;
}) => {
  const handleThemeSelector = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setTheme(event.target.value);
  };
  return (
    <div>
      <p className="mb-2 text-base">Code Theme</p>
      <SelectSettings
        array={Theme}
        value={theme}
        onChange={handleThemeSelector}
      />
    </div>
  );
};
