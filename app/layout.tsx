import React from "react";
import type { Metadata } from 'next';
import { Raleway } from 'next/font/google';
import './globals.css';
import {ReduxProvider} from "@/redux/provider";

const inter = Raleway({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
      <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
