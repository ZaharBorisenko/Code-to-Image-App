'use client';
import {
  BackgroundSelector,
  CodeEditor,
  LanguageSelector,
  ThemeSelector,
} from '@/components';
import '@/app/globals.css';
import { useRef, useState } from 'react';
import { Background, Languages, Paddings, Theme } from '@/utils';
import { IconBaseProps } from 'react-icons';
import { PaddingSelector } from '@/components/PaddingSelector';
import html2canvas from 'html2canvas';

export default function Home() {
  const codeEditorRef = useRef<any>();
  const [language, setLanguage] = useState<string>(Languages[0].name);
  const [theme, setTheme] = useState<string>(Theme[0].name);
  const [background, setBackground] = useState(Background[1]);
  const [activeIcon, setActiveIcon] = useState<IconBaseProps>(
    Languages[0].icon,
  );
  const [currentPadding, setCurrentPadding] = useState(Paddings[0]);

  const exportPng = async () => {
    const editorElement = codeEditorRef.current;

    if (editorElement) {
      const canvas = await html2canvas(editorElement);
      const image = canvas
        .toDataURL('image/png')
        .replace('image/png', 'image/octet-stream');

      const link = document.createElement('a');
      link.download = 'code.png';
      // @ts-ignore
      link.href = image;
      link.click();
    }
  };

  return (
    <div className='ace-editor-container flex justify-center h-screen items-center'>
      <div>
        <header
          className='mt-6 w-[1000px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
                     z-10 bg-[#191919] rounded border border-[#3c3c3c]'
        >
          <div className='flex justify-between items-end gap-x-6'>
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

            <PaddingSelector
              currentPadding={currentPadding}
              setCurrentPadding={setCurrentPadding}
            />

            <button
                className='bg-blue-700 h-[50px] text-white rounded-lg px-3 hover:bg-blue-900'
                onClick={exportPng}
            >
              Export PNG
            </button>
          </div>
        </header>

        <div ref={codeEditorRef} className='mt-20'>
          <CodeEditor
            padding={currentPadding}
            background={background}
            language={language}
            activeIcon={activeIcon}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
