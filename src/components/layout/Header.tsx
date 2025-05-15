import Image from 'next/image'
import React from 'react'

interface HeaderProps {
  onMenuClick: () => void;
  activePage: string;
}

export default function Header({ onMenuClick, activePage }: HeaderProps) {
  return (
    <div className='w-[80px] 2xl:w-[100px] h-screen z-100  fixed top-0 left-0 flex flex-col justify-between border-r border-[rgba(255,255,255,0.2)] '>
      <div className='relative w-full 2xl:h-[100px] h-[80px] bg-background-gradient'>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        Huy
      </div>
      <button 
        onClick={onMenuClick}
        className={`menu-btn flex flex-col gap-2 justify-center items-center cursor-pointer hover:opacity-80 transition-opacity ${activePage === 'navigation' ? 'is-open' : ''}`}
      >
        <span className='w-8 h-0.5 bg-white'></span>
        <span className='w-8 h-0.5 bg-white'></span>
      </button>
      <div className='flex flex-col gap-2 justify-center items-center mb-4 text-white text-[14px]'>
        <a href='#' >FB</a>
        <a href='#'>IG</a>
        <a href='#'>YT</a>
      </div>
    </div>
  )
}