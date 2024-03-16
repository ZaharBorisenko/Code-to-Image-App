export const Button = ({onClick}: {onClick: () => void}) => {
    return (
        <button
            className='bg-blue-700 h-[50px] text-white rounded-lg px-3 hover:bg-blue-900'
            onClick={onClick}
        >
            Export PNG
        </button>
    );
};
