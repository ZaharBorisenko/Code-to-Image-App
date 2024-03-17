import Link from 'next/link';

export const LinkUI = ({
  text,
  link,
}: {
  text: string;
  link: string;
}) => {
  return <Link className="bg-blue-700 text-lg font-bold text-white h-[130px]" href={link}>{text}</Link>;
};
