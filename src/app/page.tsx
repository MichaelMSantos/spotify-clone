import React from 'react';
import { Search, ChevronRight, ChevronLeft, Play, Shuffle, SkipBack, SkipForward, Repeat, Bold, Mic2, LaptopMinimal, Maximize2 } from 'lucide-react';
import './styles.css';
import Image from 'next/image';
import { Footer } from '@/components/Footer';
import { Main } from '@/components/Main';

export default function Home() {
  return (
    <div className="h-screen flex flex-col p-2">
      <div className="flex flex-1">
        <aside className="w-96">
          <div className="mb-2 bg-zinc-900 rounded-lg pl-6 pb-5 pt-5">
            <nav className="flex flex-col space-y-6">
              <a href="#" className="menu-link flex items-center gap-5 font-semibold hover:text-white">
                <svg className="custom-svg" width="25" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9167 27.9136V10.3487L16.5036 4.25261L6.08333 10.3948V27.9136H11.6389V21.0368C11.6389 19.3084 13.038 17.9072 14.7639 17.9072H18.2361C19.962 17.9072 21.3611 19.3084 21.3611 21.0368V27.9136H26.9167ZM27.9583 30C28.5336 30 29 29.5329 29 28.9568V9.75018C29 9.37949 28.8036 9.03665 28.484 8.84957L17.0275 2.14259C16.7018 1.95191 16.2986 1.95251 15.9734 2.14417L4.51329 8.89932C4.19525 9.08679 4 9.42878 4 9.79835V28.9568C4 29.5329 4.46637 30 5.04167 30H12.6805C13.2558 30 13.7222 29.5329 13.7222 28.9568V21.0368C13.7222 20.4606 14.1886 19.9936 14.7639 19.9936H18.2361C18.8114 19.9936 19.2778 20.4606 19.2778 21.0368V28.9568C19.2778 29.5329 19.7442 30 20.3195 30H27.9583Z" fill="rgb(163 163 163)" />
                </svg>
                <span className="menu-text">Início</span>
              </a>
              <a href="#" className="flex items-center gap-5 font-semibold hover:text-white">
                <Search /> Buscar
              </a>
            </nav>
          </div>
          <div className="bg-zinc-900 rounded-lg pl-6 pt-4 pb-5 pr-6">
            <nav className=' space-y-6'>
              <a href="" className='menu-link flex items-center gap-3 font-bold'>
                <svg className="custom-svg searchicon" width="26" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="3" height="26" rx="1.5" fill="rgb(163 163 163)" />
                  <rect x="11" y="3" width="3" height="26" rx="1.5" fill="rgb(163 163 163)" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z" fill="rgb(163 163 163)" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 6.67524V26.5191H26.5V9.76681L21.5 6.67524ZM20.5288 3.1517C19.8627 2.73984 19 3.21512 19 3.99394V28.0076C19 28.5557 19.4477 29 20 29H28C28.5523 29 29 28.5557 29 28.0076V8.94045C29 8.59781 28.8219 8.2794 28.5288 8.09821L20.5288 3.1517Z" fill="rgb(163 163 163)" />
                </svg>
                <span className='menu-text'>Sua Biblioteca</span>
              </a>
              <button className='bg-zinc-800 w-20 font-bold text-sm transition-all hover:bg-zinc-700 text-zinc-100 pt-1 pb-1 rounded-3xl'>
                Playlists
              </button>
              <div className='flex justify-between'>
                <div>
                  <a href="#">
                    <Search size={18} />
                  </a>
                </div>
                <div className='flex items-center'>
                  <a href="#" className='text-sm font-bold text-zinc-400 flex items-center'>
                    Recentes
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clipPath="url(#clip0)">
                        <rect x="13" y="6" width="2" height="2" fill="#D9D9D9" />
                        <rect x="13" y="12" width="2" height="2" fill="#D9D9D9" />
                        <rect x="13" y="18" width="2" height="2" fill="#D9D9D9" />
                        <rect x="17" y="18" width="10" height="2" fill="#D9D9D9" />
                        <rect x="17" y="12" width="10" height="2" fill="#D9D9D9" />
                        <rect x="17" y="6" width="10" height="2" fill="#D9D9D9" />
                      </g>
                      <defs>
                        <clipPath id="clip0">
                          <rect width="28" height="28" fill="white" transform="matrix(0 1 -1 0 28 0)" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </aside>
        <Main/>
      </div>
      <Footer/>
    </div>
  );
}
