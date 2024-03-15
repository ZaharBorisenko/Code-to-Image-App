import React from 'react';
import { Background } from '@/utils';
import {useDispatch, useSelector} from 'react-redux';
import { setBackground } from '@/redux/Slices/codeEditorSlice';
import {useAppDispatch, useAppSelector} from "@/redux/hook";

export const BackgroundSelector = () => {
  const dispatch = useAppDispatch();
  const background = useAppSelector(state => state.codeEditorSlice.background)
  return (
    <div>
      <p className='mb-2 text-base'>Select background</p>
      <div className='flex items-center gap-2 max-w-[200px] flex-wrap'>
        {Background.map((b, index) => (
          <div
            key={index}
            className={`rounded-full w-6 h-6 cursor-pointer ${background === b && 'border-white border-2'}`}
            style={{ background: b }}
            onClick={() => dispatch(setBackground(b))}
          ></div>
        ))}
      </div>
    </div>
  );
};
