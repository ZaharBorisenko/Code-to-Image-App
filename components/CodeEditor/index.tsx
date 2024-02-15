"use client"
import AceEditor from "react-ace";
import {Resizable} from "re-resizable";

import 'ace-builds/src-noconflict/mode-javascript'
import 'ace-builds/src-noconflict/mode-html'
import 'ace-builds/src-noconflict/mode-css'
import 'ace-builds/src-noconflict/mode-python'
import 'ace-builds/src-noconflict/mode-java'
import 'ace-builds/src-noconflict/mode-typescript'

import 'ace-builds/src-noconflict/theme-monokai'
import 'ace-builds/src-noconflict/theme-terminal'
import 'ace-builds/src-noconflict/theme-twilight'
import {useEffect, useState} from "react";
export const CodeEditor = ({language}: {language:string}) => {
    const [width, setWidth] = useState<number>(1000)
    const [height, setHeight] = useState<number>(500)
    const handleResize = (evt,direction,ref,pos) => {
        const newHeight =  ref.style.height;
        setHeight(parseInt(newHeight))
    }
    const updateSize = () => {
        setWidth(window.innerWidth);
    };
    useEffect(() => {
        window.addEventListener('resize', updateSize)
        updateSize()
        return () => window.removeEventListener('resize', updateSize)
    }, []);
    return (
        <div>
            <Resizable
                minHeight={466}
                minWidth={510}
                maxWidth={1000}
                defaultSize={{
                    width,
                    height:height || 500,
                }}
                onResize={handleResize}
                className="resize-container relative bg-red-700"

            >
                <div>
                    <AceEditor
                        mode={language}
                        theme="twilight"
                        showGutter={false}
                        defaultValue="const hello = () => { console.log('Hi!') }"
                        name="code-editor"
                        fontSize={16}
                        wrapEnabled={true}
                        showPrintMargin={false}
                        editorProps={{$blockScrolling:true}}
                        highlightActiveLine={false}
                    />
                </div>
            </Resizable>
        </div>
    );
};
