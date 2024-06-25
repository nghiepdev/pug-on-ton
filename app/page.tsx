import Image from 'next/image';
import logoImg from './logo.png';
import clsx from 'clsx';

export default function Home() {
  return (
    <main className='relative'>
      <video
        loop
        muted
        autoPlay
        playsInline
        preload='none'
        className='w-screen h-screen object-cover'
      >
        <source src='/video-1.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0'>
        <header className='flex bg-white/30 w-[calc(100%-200px)] mx-auto rounded-3xl items-center px-10 gap-10'>
          <a href='/' className='shrink-0'>
            <Image src={logoImg} quality={100} priority alt='' height={91} />
          </a>
          <ul
            className={clsx(
              'flex ml-auto mr-auto items-center gap-10',
              '[&_a]:multi-[`inline-block;animate-spin`]',
              '[&_img]:multi-[object-cover;size-[84px]]'
            )}
          >
            <li>
              <a href='/'>
                <img src='/home.svg' alt='' className='!size-[65px]' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='/twitter.svg' alt='' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='/tele.svg' alt='' className='!size-[120px]' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='/menu-1.svg' alt='' />
              </a>
            </li>
            <li>
              <a href='/'>
                <img src='/menu-2.svg' alt='' />
              </a>
            </li>
          </ul>
        </header>
      </div>
    </main>
  );
}
