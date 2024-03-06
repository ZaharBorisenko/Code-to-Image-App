import { Paddings } from '@/utils';

export const PaddingSelector = ({
  currentPadding,
  setCurrentPadding,
}: {
  currentPadding: string;
  setCurrentPadding: (currentPadding: string) => void;
}) => {
    console.log(currentPadding)
  return (
    <div>
      <p className='mb-2'>Выберите отступ</p>
      <div className='flex items-center gap-x-2'>
        {Paddings.map((p, index) => (
          <div
            className={`cursor-pointer border-2 p-1 rounded-lg ${p === currentPadding && 'bg-red-700'}`}
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
