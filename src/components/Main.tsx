import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
    return(
        <main className="overflow-auto flex-1 pl-6 pr-6 pt-4 pb-6 bg-zinc-900 ml-2 rounded-lg">
          <div className='flex items-center gap-2'>
            <button className='bg-black/30 rounded-full p-1 '>
              <ChevronLeft />
            </button>
            <button className='bg-black/30 rounded-full p-1'>
              <ChevronRight />
            </button>
          </div>
          <div className='grid grid-cols-3 gap-6 mt-6'>
            <div className='bg-white/5 rounded flex items-center gap-3 hover:bg-white/10 transition-colors group'>
              <Image
                src="/album1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={90}
                height={90} />
              <p className='font-bold'>
                Imunidade Musical
              </p>
              <button className='btnShadow w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play
                  fill='#000' />
              </button>
            </div>
            <div className='bg-white/5 rounded flex items-center gap-3 hover:bg-white/10 transition-colors group'>
              <Image
                src="/album1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={90}
                height={90} />
              <p className='font-bold'>
                Imunidade Musical
              </p>
              <button className='btnShadow w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play
                  fill='#000' />
              </button>
            </div>
            <div className='bg-white/5 rounded flex items-center gap-3 hover:bg-white/10 transition-colors group'>
              <Image
                src="/album1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={90}
                height={90} />
              <p className='font-bold'>
                Imunidade Musical
              </p>
              <button className='btnShadow w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play
                  fill='#000' />
              </button>
            </div>
            <div className='bg-white/5 rounded flex items-center gap-3 hover:bg-white/10 transition-colors group'>
              <Image
                src="/album1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={90}
                height={90} />
              <p className='font-bold'>
                Imunidade Musical
              </p>
              <button className='btnShadow w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play
                  fill='#000' />
              </button>
            </div>
            <div className='bg-white/5 rounded flex items-center gap-3 hover:bg-white/10 transition-colors group'>
              <Image
                src="/album1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={90}
                height={90} />
              <p className='font-bold'>
                Imunidade Musical
              </p>
              <button className='btnShadow w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play
                  fill='#000' />
              </button>
            </div>
            <div className='bg-white/5 rounded flex items-center gap-3 hover:bg-white/10 transition-colors group'>
              <Image
                src="/album1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={90}
                height={90} />
              <p className='font-bold'>
                Imunidade Musical
              </p>
              <button className='btnShadow w-10 h-10 flex justify-center items-center rounded-full bg-green-500 text-black ml-auto mr-4 invisible group-hover:visible'>
                <Play
                  fill='#000' />
              </button>
            </div>
          </div>
          <h1 className='font-bold text-2xl mt-16 pl-1 text-white'>
            Feito para Mike
          </h1>
          <div className="grid grid-cols-6 mt-2">
            <a href='' className='p-3 rounded-lg flex flex-col gap-1 hover:bg-white/5 transition-colors'>
              <Image
                className='w-full rounded-lg'
                src="/mix1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={160}
                height={160} />
              <p className='font-bold mt-1 font-medium'>
                Daily Mix 1
              </p>
              <span className='text-sm font-semibold text-zinc-400'>Cavetown, Billie Eillish e mais</span>
            </a>
            <a href='' className='p-3 rounded-lg flex flex-col gap-1 hover:bg-white/5 transition-colors'>
              <Image
                className='w-full rounded-lg'
                src="/mix1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={160}
                height={160} />
              <p className='font-bold mt-1 font-medium'>
                Daily Mix 1
              </p>
              <span className='text-sm font-semibold text-zinc-400'>Cavetown, Billie Eillish e mais</span>
            </a>
            <a href='' className='p-3 rounded-lg flex flex-col gap-1 hover:bg-white/5 transition-colors'>
              <Image
                className='w-full rounded-lg'
                src="/mix1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={160}
                height={160} />
              <p className='font-bold mt-1 font-medium'>
                Daily Mix 1
              </p>
              <span className='text-sm font-semibold text-zinc-400'>Cavetown, Billie Eillish e mais</span>
            </a>
            <a href='' className='p-3 rounded-lg flex flex-col gap-1 hover:bg-white/5 transition-colors'>
              <Image
                className='w-full rounded-lg'
                src="/mix1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={160}
                height={160} />
              <p className='font-bold mt-1 font-medium'>
                Daily Mix 1
              </p>
              <span className='text-sm font-semibold text-zinc-400'>Cavetown, Billie Eillish e mais</span>
            </a>
            <a href='' className='p-3 rounded-lg flex flex-col gap-1 hover:bg-white/5 transition-colors'>
              <Image
                className='w-full rounded-lg'
                src="/mix1.jpeg"
                alt="Capa do álbum Imunidade Musical"
                width={160}
                height={160} />
              <p className='font-bold mt-1 font-medium'>
                Daily Mix 1
              </p>
              <span className='text-sm font-semibold text-zinc-400'>Cavetown, Billie Eillish e mais</span>
            </a>
          </div>
        </main>
    ) 
}