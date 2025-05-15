"use client"

import { useState } from "react"
import Header from "@/components/layout/Header"
import { NavigationPage } from "@/components/layout/NavigationPage"
import About from "@/modules/home/About"
import Contact from "@/modules/home/Contact"
import Home from "@/modules/home/Home"
import Portfolio from "@/modules/home/Portfolio"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [activePage, setActivePage] = useState('home');


  return (
    <>
      <Header onMenuClick={() => setActivePage('navigation')} activePage={activePage} />
      {/* <main>
        {children}
      </main> */}

    </>
  )
} 