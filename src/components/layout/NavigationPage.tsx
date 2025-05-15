"use client"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import React, { useEffect, useState } from "react"

interface NavigationPageProps {
  activePage: string
  setActivePage: (page: string) => void
  prevPage: string
}

export const NavigationPage: React.FC<NavigationPageProps> = ({
  activePage,
  setActivePage,
  prevPage,
}) => {
  const [loadedImages, setLoadedImages] = useState<number[]>([])
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    // Reset loaded images when navigation opens
    setLoadedImages([])
    setShowContent(false)

    // Reset state when component unmounts
    return () => {
      setLoadedImages([])
      setShowContent(false)
    }
  }, [])

  useEffect(() => {
    // Show content after all images are loaded
    if (loadedImages.length === navigationImages.length) {
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 100) // Small delay after last image loads
      return () => clearTimeout(timer)
    }
  }, [loadedImages])

  const navigationItems = [
    {
      id: "home",
      label: "Home",
      welcomeText: "Welcome to",
    },
    {
      id: "about",
      label: "About",
      welcomeText: "Get to know",
    },
    {
      id: "portfolio",
      label: "Portfolio",
      welcomeText: "Check out my",
    },
    {
      id: "contact",
      label: "Contact",
      welcomeText: "Let's connect",
    }
  ]

  const navigationImages = [
    "/images/home.webp",
    "/images/about.png",
    "/images/about.png",
    "/images/about.png",
    "/images/about.png",
    "/images/about.png",
  ]

  const handleImageLoad = (index: number) => {
    setLoadedImages(prev => [...prev, index])
  }

  // Calculate delay based on distance from the end
  const getTransitionDelay = (index: number) => {
    const totalImages = navigationImages.length
    const distanceFromEnd = totalImages - 1 - index
    return `${distanceFromEnd * 100}ms`
  }

  return (
    <section >
      <div className="grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="left-content w-full m-auto flex flex-col gap-8 ">
          {navigationItems.map((item, index) => (
            <div
              key={item.id}
              className={`transition-all duration-700 ease-in-out ${
                showContent ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
              }`}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              <button
                onClick={() => {
                  setActivePage(item.id)
                }}
                className={`opacity-50 hover:opacity-100 hover:cursor-pointer transition-opacity duration-300 text-left ${
                  prevPage === item.id ? " opacity-100" : ""
                }`}
              >
                <Typography
                  variant="span"
                  fontFamily="roboto"
                  color="primary"
                  className="uppercase"
                >
                  {item.welcomeText}
                </Typography>
                <Typography
                  variant="h1"
                  fontFamily="oswald"
                  color="primary"
                  fontWeight="medium"
                  className={`uppercase ${
                    prevPage === item.id
                      ? "bg-background-gradient !bg-clip-text w-fit"
                      : ""
                  }`}
                >
                  {item.label}
                </Typography>
              </button>
            </div>
          ))}
        </div>
        <div className="h-screen relative grid grid-cols-6">
          {navigationImages.map((item, index) => (
            <div 
              key={item} 
              className={`relative transition-all duration-700 ease-in-out ${
                loadedImages.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-full'
              }`}
              style={{ transitionDelay: getTransitionDelay(index) }}
            >
              <Image
                src={item}
                alt={`${item} Image`}
                fill
                className="object-cover object-center"
                onLoad={() => handleImageLoad(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NavigationPage
