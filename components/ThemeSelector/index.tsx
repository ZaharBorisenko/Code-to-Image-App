import React from 'react';
import { Theme } from '@/utils';

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
      <p>Code Theme</p>
      <select value={theme} onChange={handleThemeSelector}>
        {Theme.map(theme => (
          <option key={theme.name} value={theme.name}>
            {theme.text}
          </option>
        ))}
      </select>
    </div>
  );
};
