'use client';
import {CodeEditor, LanguageSelector} from '@/components';
import '@/app/globals.css';
import { useState } from 'react';
import { Languages } from '@/utils/language';

export default function Home() {
  const [language, setLanguage] = useState(Languages[0].name);
  return (
        <div className='ace-editor-container flex justify-center h-screen items-center'>
            <div>
                <header className="mt-6 w-[1000px] p-5 fixed top-0 left-1/2 translate-x-[-50%]
                z-10 bg-[#191919] rounded border border-[#3c3c3c] shadow-sm
                ">
                    <LanguageSelector/>
                </header>
                <CodeEditor language={language} />
            </div>
        </div>
  );
}
