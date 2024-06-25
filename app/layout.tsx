import type {Metadata} from 'next';
import {Poor_Story} from 'next/font/google';
import './globals.css';

const font = Poor_Story({
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Fred The Pug | $PUG',
  description:
    "Telegram’s Dog - FRED THE PUG - Inspired by the mischief $PUG from Telegram's special sticker pack. It's time to join $PUG in unleashing a whole new Dog meta on #TON.",
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
