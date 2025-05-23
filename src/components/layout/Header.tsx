import Image from 'next/image'
import React from 'react'

interface HeaderProps {
  onMenuClick: () => void;
  activePage: string;
}

const socialMedia = [
  { text: "Git", link: "https://github.com/NhatHuy-149" },
  { text: "FB", link: "https://www.facebook.com/nhat.huy.777982" },
  { text: "IG", link: "https://www.instagram.com/_nhathuy_1409_/" },
]
export default function Header({ onMenuClick, activePage }: HeaderProps) {
  return (
    <div className='bg-[#061125] w-full xl:w-[80px] 2xl:w-[100px] xl:h-screen z-100 fixed top-0 left-0 flex flex-row xl:flex-col justify-between border-b xl:border-b-0 xl:border-r border-[rgba(255,255,255,0.2)] '>
      <div className='relative w-[80px] 2xl:w-[100px] h-[80px] 2xl:h-[100px] bg-background-gradient'>
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        
      </div>
      <button 
        onClick={onMenuClick}
        className={`menu-btn flex flex-col gap-2 justify-center items-center cursor-pointer hover:opacity-80 transition-opacity ${activePage === 'navigation' ? 'is-open' : ''}`}
      >
        <span className='w-8 h-0.5 bg-white'></span>
        <span className='w-8 h-0.5 bg-white'></span>
      </button>
      <div className='hidden xl:flex flex-col gap-2 justify-center items-center mb-4 text-white text-[14px]'>
        {socialMedia.map((item, index) => (
          <a key={index} href={item.link} className='hover:opacity-80 transition-opacity'>{item.text}</a>
        ))}
      </div>
    </div>
  )
}