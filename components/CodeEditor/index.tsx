'use client';
import AceEditor from 'react-ace';
import { Resizable } from 're-resizable';

import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/mode-html';
import 'ace-builds/src-noconflict/mode-css';
import 'ace-builds/src-noconflict/mode-python';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/src-noconflict/mode-typescript';

import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/theme-terminal';
import 'ace-builds/src-noconflict/theme-twilight';
import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useAppSelector } from '@/redux/hook';

export const CodeEditor = () => {
  const iconLanguage = useAppSelector(state => state.codeEditorSlice.icon);
  const language = useAppSelector(
    state => state.codeEditorSlice.language,
  );
  const background = useAppSelector(
    state => state.codeEditorSlice.background,
  );
  const padding = useAppSelector(
    state => state.codeEditorSlice.padding,
  );
  const theme = useAppSelector(state => state.codeEditorSlice.theme);
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(500);
  const [fileName, setFileName] = useState<string>('Untitled-1');
  const handleResize = (
    evt: any,
    direction: any,
    ref: any,
    pos: any,
  ) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight, 10));
  };
  const updateSize = () => {
    setWidth(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return (
    <div className=''>
      <Resizable
        minHeight={466}
        minWidth={510}
        maxWidth={1000}
        defaultSize={{
          width,
          height: height || 500,
        }}
        onResize={handleResize}
        style={{ background, padding }}
        className='resize-container relative'
      >
        <div>
          <div className='h-[52px] flex items-center justify-between bg-black bg-opacity-80 mb-1  border-2 border-[#FFFFFF14] rounded-t-lg px-4'>
            <div className='flex gap-1 items-center'>
              <div className='w-5 h-5 rounded-full bg-[#ff5656]'></div>
              <div className='w-5 h-5 rounded-full bg-[#ffbc6a]'></div>
              <div className='w-5 h-5 rounded-full bg-[#67f772]'></div>
            </div>

            <div className='w-full'>
              <input
                value={fileName}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFileName(e.target.value)
                }
                className='w-full leading-10 outline-none font-medium text-center bg-transparent'
                type='text'
              />
            </div>

            {iconLanguage}
          </div>
          <AceEditor
            mode={language}
            theme={theme}
            showGutter={false}
            defaultValue="const hello = () => { console.log('Hi!') }"
            name='code-editor'
            fontSize={16}
            height={`calc(${height}px - ${padding} - ${padding} - 52px)`}
            wrapEnabled={true}
            showPrintMargin={false}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={false}
          />
        </div>
      </Resizable>
    </div>
  );
};
