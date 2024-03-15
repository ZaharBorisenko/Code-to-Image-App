import { Paddings } from '@/utils';
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { setPadding } from '@/redux/Slices/codeEditorSlice';

export const PaddingSelector = () => {
  const dispatch = useAppDispatch();
  const padding = useAppSelector(
    state => state.codeEditorSlice.padding,
  );
  return (
    <div>
      <p className='mb-2 text-base'>Select an indentation</p>
      <div className='flex items-center gap-x-2'>
        {Paddings.map((p, index) => (
          <div
            className={`cursor-pointer border-2 border-gray-500 hover:border-gray-200 text-white font-medium p-1 
            rounded-lg ${p === padding && 'bg-blue-700'}`}
            onClick={() => dispatch(setPadding(Paddings[index]))}
            key={index}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};
