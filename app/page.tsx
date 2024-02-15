'use client';
import {CodeEditor, LanguageSelector} from '@/components';
import '@/app/globals.css';
import { useState } from 'react';
import { Languages } from '@/utils/language';

export default function Home() {
  const [language, setLanguage] = useState(Languages[0].name);
  return (
        <div className='ace-editor-container flex justify-center'>
            <div>
                <header>
                    <LanguageSelector/>
                </header>
                <CodeEditor language={language} />
            </div>
        </div>
  );
}
