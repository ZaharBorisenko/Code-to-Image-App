import { Paddings } from '@/utils';

export const PaddingSelector = ({setCurrentPadding}: {setCurrentPadding: (currentPadding:string) => void}) => {
  return (
    <div>
      <p className='mb-2'>Выберите отступ</p>
      <div className='flex items-center gap-x-2'>
        {Paddings.map((p, index) => (
          <div
            className='cursor-pointer border-2 p-1 rounded-lg'
            onClick={() => setCurrentPadding(Paddings[index])}
            key={index}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
