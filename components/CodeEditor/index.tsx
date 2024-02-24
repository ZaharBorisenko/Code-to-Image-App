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
import { useEffect, useState } from 'react';

export const CodeEditor = ({ language,activeIcon, theme }: { language: string, activeIcon:any, theme:any }) => {
  const [width, setWidth] = useState<number>(1000);
  const [height, setHeight] = useState<number>(500);
  const handleResize = (
    evt: any,
    direction: any,
    ref: any,
    pos: any,
  ) => {
    const newHeight = ref.style.height;
    setHeight(parseInt(newHeight));
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
    <div>
      <Resizable
        minHeight={466}
        minWidth={510}
        maxWidth={1000}
        defaultSize={{
          width,
          height: height || 500,
        }}
        onResize={handleResize}
        className='resize-container relative'
      >
        <div>
          <div className='h-[52px] flex items-center justify-between bg-black
           bg-opacity-80 mb-1 shadow-black shadow-sm border-2 border-[#FFFFFF14] rounded-t-lg px-4'
          >
            <div className='flex gap-1 items-center'>
              <div className='w-5 h-5 rounded-full bg-[#ff5656]'></div>
              <div className='w-5 h-5 rounded-full bg-[#ffbc6a]'></div>
              <div className='w-5 h-5 rounded-full bg-[#67f772]'></div>
            </div>

            <div className='w-full'>
              <input
                className='w-full outline-none font-medium text-center bg-transparent'
                type='text'
              />
            </div>

            {activeIcon}

          </div>
          <AceEditor
            mode={language}
            theme={theme}
            showGutter={false}
            defaultValue="const hello = () => { console.log('Hi!') }"
            name='code-editor'
            fontSize={16}
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
