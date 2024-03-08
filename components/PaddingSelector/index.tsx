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
      <p className="mb-2 text-base">Select an indentation</p>
      <div className='flex items-center gap-x-2'>
        {Paddings.map((p, index) => (
          <div
            className={`cursor-pointer border-2 border-gray-500 text-white font-medium p-1 
            rounded-lg ${p === currentPadding && 'border-blue-700'}`}
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
