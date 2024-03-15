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
  const [activeIcon, setActiveIcon] = useState<IconBaseProps>(
    Languages[0].icon,
  );

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
    <div className='ace-editor-container flex justify-center items-center'>
      <div>
        <header className='w-[1000px] p-5 bg-[#191919] rounded border border-[#3c3c3c] mt-5'>
          <div className='flex justify-between items-end gap-x-6'>
            <LanguageSelector
              language={language}
              setLanguage={setLanguage}
              setActiveIcon={setActiveIcon}
            />

            <ThemeSelector theme={theme} setTheme={setTheme} />

            <BackgroundSelector/>

            <PaddingSelector/>

            <button
              className='bg-blue-700 h-[50px] text-white rounded-lg px-3 hover:bg-blue-900'
              onClick={exportPng}
            >
              Export PNG
            </button>
          </div>
        </header>

        <div ref={codeEditorRef} className='flex justify-center text-center items-center mt-5'>
          <CodeEditor
            language={language}
            activeIcon={activeIcon}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}
