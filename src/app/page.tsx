"use client"

import About from "@/modules/home/About"
import Contact from "@/modules/home/Contact"
import Home from "@/modules/home/Home"
import Portfolio from "@/modules/home/Portfolio"
import { useState } from "react"
import Header from "@/components/layout/Header"
import NavigationPage from "@/components/layout/NavigationPage"

export default function HomePage() {
  const [activePage, setActivePage] = useState("home")
  const [prevPage, setPrevPage] = useState("home")

  const handleMenuClick = () => {
    if (activePage === "navigation") {
      // Go back to previous page
      setActivePage(prevPage)
    } else {
      // Store current page and show navigation
      setPrevPage(activePage)
      setActivePage("navigation")
    }
  }

  const renderPage = () => {
    switch (activePage) {
      case "home":
        return <Home setActivePage={setActivePage} />
      case "about":
        return <About />
      case "portfolio":
        return <Portfolio />
      case "contact":
        return <Contact />
      case "navigation":
        return (
          <NavigationPage
            setActivePage={setActivePage}
            prevPage={prevPage}
          />
        )
      default:
        return <Home setActivePage={setActivePage} />
    }
  }

  return (
    <div>
      <Header onMenuClick={handleMenuClick} activePage={activePage} />
      <div className="mt-[80px] xl:mt-[0]"></div>
      {renderPage()}
    </div>
  )
}
