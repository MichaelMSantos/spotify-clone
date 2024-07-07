import { LaptopMinimal, Maximize2, Play, Repeat, Shuffle, SkipBack, SkipForward } from 'lucide-react';
import Image from 'next/image';


export function Footer () {
    return(
        <footer className=" flex items-center justify-between p-3">
        <div className='flex items-center gap-2'>
          <Image
            className='rounded-lg'
            src="/album1.jpeg"
            alt="Capa da música 'I Feel So Good Today'"
            width={59}
            height={59} />
          <div className="msc flex flex-col pt-3 pl-2">
            <strong className='titulo'>
              I Feel So Good Today
            </strong>
            <span className='autor text-zinc-400'>
              Charlie Brown Jr.
            </span>
          </div>
        </div>
        <div className='flex flex-col items-center'>
          <div className='flex items-center gap-4 space-y-1'>
            <Shuffle size={18} />
            <SkipBack size={22}
              fill='rgb(212 212 212)' className='text-neutral-300' />
            <button className='btnShadow w-8 h-8 text-black flex justify-center items-center rounded-full bg-white'>
              <Play
                size={18}
                fill='#000' />
            </button>
            <SkipForward size={22}
              fill='rgb(212 212 212)'
              className='text-neutral-300' />
            <Repeat size={18} />
          </div>
          <div className='flex items-center gap-2'>
            <span className='text-sm text-zinc-500'>
              0:11
            </span>
            <div className="h-1 rounded-full w-[33rem] bg-zinc-600">
              <div className='bg-zinc-200 w-6 h-1 rounded-full'></div>
            </div>
            <span className='text-sm text-zinc-500'>
              4:08
            </span>
          </div>
        </div>
        <div className='flex items-center gap-3'>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M22 9H10C9.44772 9 9 9.44772 9 10V11C9 11.5523 9.44772 12 10 12H22C22.5523 12 23 11.5523 23 11V10C23 9.44772 22.5523 9 22 9ZM10 7C8.34315 7 7 8.34315 7 10V11C7 12.6569 8.34315 14 10 14H22C23.6569 14 25 12.6569 25 11V10C25 8.34315 23.6569 7 22 7H10ZM7 17H25V19.5H7V17ZM25 23H7V25.5H25V23Z" fill="white" />
          </svg>
          <LaptopMinimal 
          size={20}/>
          <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" fill-rule="evenodd" clip-rule="evenodd" d="M16.1385 9.74993L9.47894 13.6673C7.50702 14.8273 7.50702 17.679 9.47894 18.8389L16.1385 22.7563V9.74993ZM8.4649 11.9434C5.17837 13.8767 5.17837 18.6295 8.4649 20.5628L16.6314 25.3666C17.2981 25.7588 18.1385 25.2781 18.1385 24.5047V8.00152C18.1385 7.2281 17.2981 6.74745 16.6314 7.13958L8.4649 11.9434ZM19.1387 9.25317C20.1236 9.25317 21.0989 9.44717 22.0088 9.82408C22.9187 10.201 23.7455 10.7534 24.442 11.4499C25.1384 12.1463 25.6909 12.9731 26.0678 13.883C26.4447 14.793 26.6387 15.7683 26.6387 16.7532C26.6387 17.7381 26.4447 18.7134 26.0678 19.6233C25.6909 20.5332 25.1384 21.36 24.442 22.0565C23.7455 22.7529 22.9187 23.3054 22.0088 23.6823C21.0989 24.0592 20.1236 24.2532 19.1387 24.2532V22.2443C19.8598 22.2443 20.5738 22.1022 21.24 21.8263C21.9062 21.5503 22.5116 21.1459 23.0215 20.636C23.5314 20.1261 23.9358 19.5207 24.2118 18.8545C24.4877 18.1883 24.6298 17.4743 24.6298 16.7532C24.6298 16.0321 24.4877 15.318 24.2118 14.6518C23.9358 13.9856 23.5314 13.3803 23.0215 12.8704C22.5116 12.3605 21.9062 11.956 21.24 11.6801C20.5738 11.4041 19.8598 11.2621 19.1387 11.2621V9.25317ZM21.3311 14.5363C20.7997 13.8955 20.053 13.4431 19.213 13.2532L19.1387 20.2532C19.9826 20.079 20.7387 19.6408 21.2836 19.0101C21.8285 18.3795 22.1299 17.5936 22.1385 16.781C22.1471 15.9684 21.8625 15.177 21.3311 14.5363Z" fill="white" />
          </svg>
          <div className='h-1 rounded-full w-24 bg-zinc-600'>
            <div className='bg-zinc-200 w-16 h-1 rounded-full'></div>
          </div>
          <Maximize2 
          size={20}/>
        </div>
      </footer>
    )
}