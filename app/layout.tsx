import type {Metadata} from 'next';
import {Poor_Story} from 'next/font/google';
import './globals.css';

const font = Poor_Story({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PUG on TON',
  description: 'PUG on TON',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  );
}
