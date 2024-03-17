'use client';
import '@/app/globals.css';
import { AiFillCode } from 'react-icons/ai';
import Link from 'next/link';
import { LinkUI } from '@/ui/LinkUI';
import { Button } from '@/ui/Button';

export default function Home() {
  return (
    <div className='max-w-7xl mx-auto'>
      <header className='py-4 flex justify-between items-center'>
        <div className='flex items-center gap-x-4'>
          <AiFillCode size={40} color={'#ff81d5'} />
          <p className='text-white text-3xl font-semibold'>CodeImg</p>
        </div>
        <button className='px-5 py-3 rounded-lg bg-blue-700 font-semibold text-white text-lg'>
          <Link href='/code'>Get started</Link>
        </button>
      </header>

      <div className='mt-20'>
        <p className='text-7xl font-bold text-white'>
          A tool to <br />
          <span className='text-blue-600'> beautify</span> your{' '}
          <span className='text-blue-600'>code</span>
          <br /> screenshots
        </p>
        <p className="text-2xl text-white max-w-[500px] my-5 font-semibold">
          Instantly manage your code snippets, make them beautiful to
          read and share them to everyone.
        </p>
      </div>

        <div>
            <button className='px-5 py-3 rounded-lg bg-blue-700 font-semibold text-white text-2xl'>
                <Link href='/code'>Get started</Link>
            </button>
        </div>
    </div>
  );
}
