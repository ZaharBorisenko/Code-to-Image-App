import React from 'react';
import { Background } from '@/utils';

export const BackgroundSelector = ({
  background,
  setBackground,
}: {
  background: string;
  setBackground: any;
}) => {
  return (
    <div>
      <p>Выберите фон</p>
      <div className='flex items-center gap-x-2'>
        {Background.map((b, index) => (
            <div
                key={index}
                className={`rounded-full w-6 h-6 cursor-pointer ${background=== b && 'border-white border-2'}`}
                style={{ background: b }}
                onClick={() => setBackground(b)}
            ></div>
        ))}
      </div>
    </div>
  );
};
