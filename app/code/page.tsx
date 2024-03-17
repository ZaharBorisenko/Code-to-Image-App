'use client';
import { useRef } from 'react';
import {
  BackgroundSelector,
  CodeEditor,
  LanguageSelector,
  ThemeSelector,
} from '@/components';
import { PaddingSelector } from '@/components/PaddingSelector';
import { exportPng } from '@/utils/exportPng';
import {FaArrowLeft} from "react-icons/fa";
import Link from "next/link";

export default function Page() {
  const codeEditorRef = useRef<any>();
  return (
    <div className='ace-editor-container flex justify-center items-center bg-black font-medium relative'>

      <Link href="/" className="bg-blue-700 rounded-full absolute top-8 left-16 p-2">
        <FaArrowLeft  color="#fff" size={50} className="animate-wiggle"/>
      </Link>

      <div>
        <header className='w-[1000px] p-5 bg-[#191919] rounded border border-[#3c3c3c] mt-5'>
          <div className='flex justify-between items-end gap-x-6'>
            <LanguageSelector />
            <ThemeSelector />
            <BackgroundSelector />
            <PaddingSelector />
            <button
              onClick={() => exportPng(codeEditorRef)}
              className='px-2 py-2 rounded-lg bg-blue-700 font-semibold text-white text-lg'
            >
              Export Png
            </button>
          </div>
        </header>

        <div
          ref={codeEditorRef}
          className='flex justify-center text-center items-center mt-5'
        >
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
