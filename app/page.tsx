'use client';
import {
  BackgroundSelector,
  CodeEditor,
  LanguageSelector,
  ThemeSelector,
} from '@/components';
import '@/app/globals.css';
import { useRef } from 'react';
import { PaddingSelector } from '@/components/PaddingSelector';
import {Button} from "@/ui/Button";
import {exportPng} from "@/utils/exportPng";

export default function Home() {
  const codeEditorRef = useRef<any>();
  return (
    <div className='ace-editor-container flex justify-center items-center'>
      <div>
        <header className='w-[1000px] p-5 bg-[#191919] rounded border border-[#3c3c3c] mt-5'>
          <div className='flex justify-between items-end gap-x-6'>
            <LanguageSelector/>
            <ThemeSelector/>
            <BackgroundSelector/>
            <PaddingSelector/>
            <Button onClick={() => exportPng(codeEditorRef)} />
          </div>
        </header>

        <div ref={codeEditorRef} className='flex justify-center text-center items-center mt-5'>
          <CodeEditor/>
        </div>
      </div>
    </div>
  );
}
