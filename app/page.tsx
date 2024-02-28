'use client';
import {
  BackgroundSelector,
  CodeEditor,
  LanguageSelector,
  ThemeSelector,
} from '@/components';
import '@/app/globals.css';
import { useState } from 'react';
import { Background, Languages, Theme } from '@/utils';
import { IconBaseProps } from 'react-icons';

export default function Home() {
  const [language, setLanguage] = useState<string>(Languages[0].name);
  const [theme, setTheme] = useState<string>(Theme[0].name);
  const [background, setBackground] = useState(Background[0]);
  const [activeIcon, setActiveIcon] = useState<IconBaseProps>(
    Languages[0].icon,
  );
  console.log(background);
  return (
    <div className='ace-editor-container flex justify-center h-screen items-center'>
      <div>
        <header
          className='mt-6 w-[1000px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
                     z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-sm'
        >
          <div className='flex items-center gap-x-6'>
            <LanguageSelector
              language={language}
              setLanguage={setLanguage}
              setActiveIcon={setActiveIcon}
            />

            <ThemeSelector theme={theme} setTheme={setTheme} />

            <BackgroundSelector
              background={background}
              setBackground={setBackground}
            />
          </div>
        </header>

        <CodeEditor
          background={background}
          language={language}
          activeIcon={activeIcon}
          theme={theme}
        />
      </div>
    </div>
  );
}
