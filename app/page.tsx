import Image from 'next/image';
import logoImg from './logo.png';
import dogImg from './dog.png';
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
        className='w-screen min-h-screen object-cover'
      >
        <source src='/video-1.mp4' type='video/mp4' />
      </video>
      <div className='absolute inset-0'>
        <div className='w-[calc(100%-160px)] mx-auto flex flex-col size-full py-10'>
          <header className='shrink-0 flex bg-white/30 rounded-3xl items-center px-10 gap-10 w-full'>
            <a href='/' className='shrink-0'>
              <Image src={logoImg} quality={100} priority alt='' height={91} />
            </a>
            <ul
              className={clsx(
                'flex ml-auto mr-auto items-center gap-24',
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
                <a href='https://x.com/Fredthepug_ton' target='_x'>
                  <img src='/twitter.svg' alt='' />
                </a>
              </li>
              <li>
                <a href='https://t.me/fredthepug_ton' target='_tele'>
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

          <div className='mt-auto w-full flex gap-20 justify-between'>
            <div className=''>
              <h1 className='text-center text-balance uppercase text-7xl bg-blend-screen bg-[#A3DEFF99] bg-[url(/xuong.png)] rounded-xl px-2 py-2'>
                <p>TELEGRAM TWEETED</p>
                <p>FRED THE PUG</p>
              </h1>
              <Image src={dogImg} alt='' />
            </div>
            <div className='shrink-0 overflow-hidden rounded-3xl shadow-black self-end'>
              <video
                loop
                muted
                autoPlay
                playsInline
                preload='none'
                className='object-cover'
                width={577}
              >
                <source src='/video-2.mp4' type='video/mp4' />
              </video>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
