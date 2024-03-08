import React, { FC } from 'react';

type propsType = {
  array: any;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};
export const SelectSettings: FC<propsType> = ({
  array,
  value,
  onChange,
}) => {
  return (
    <select
      className='rounded-lg w-[100px] py-2 text-gray-800 font-semibold text-center'
      value={value}
      onChange={onChange}
    >
      {array.map((l: any) => (
        <option
          className='text-gray-800 font-semibold text-center'
          key={l.name}
          value={l.name}
        >
          {l.text}
        </option>
      ))}
    </select>
  );
};
