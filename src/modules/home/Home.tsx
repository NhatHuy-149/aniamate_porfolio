"use client"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useFadeIn } from "@/hooks/useFadeIn"
import NotifyForm from "@/components/layout/Notify"
import AnimatedText from "@/components/AnimatedText"
interface HomeContent {
  title: {
    text: string
    highlight: string
    suffix: string[]
  }
  description: string
  buttons: {
    text: string
  }[]
  image: {
    src: string
    alt: string
  }
}

const homeContent: HomeContent = {
  title: {
    text: "The",
    highlight: "new start",
    suffix: ["modern", "creative", "unique"]
  },
  description: "Our website is under construction, but we are ready to go! We are preparing something amazing and exciting for you. Special surprise for our subscribers only.",
  buttons: [
    { text: "notify me" },
    { text: "explore" }
  ],
  image: {
    src: "/images/home.webp",
    alt: "Hero Image"
  }
}

const HomeContent = ({ setIsNotifyOpen, setActivePage }: { setIsNotifyOpen: (isOpen: boolean) => void, setActivePage: (page: string) => void }) => {
  const { fadeInClass } = useFadeIn()
  const handleButtonClick = (text: string) => {
    if (text.toLowerCase() === "notify me") {
      setIsNotifyOpen(true)
    }
    if (text.toLowerCase() === "explore") {
      setActivePage("about")
    }
  }

    return   <div className={`left-content m-auto ${fadeInClass}`}>
    <Typography
      variant="h1"
      fontWeight="medium"
      fontFamily="oswald"
      color="primary"
      className="uppercase"
    >
      {homeContent.title.text} <span className="bg-background-gradient !bg-clip-text">{homeContent.title.highlight}</span>
      <br />
      is <AnimatedText texts={homeContent.title.suffix} />
    </Typography>
    <Typography
      fontFamily="roboto"
      color="primary"
      className="mt-[34px]"
    >
      {homeContent.description}
    </Typography>
    <div className="flex flex-row gap-8 mt-[34px]">
      {homeContent.buttons.map((button, index) => (
        <Button key={index} onClick={() => handleButtonClick(button.text)}>
          {button.text}
        </Button>
      ))}
    </div>
  </div> 
}

export default function Home({ setActivePage }: { setActivePage: (page: string) => void }) {
  const [isLoaded, setIsLoaded] = useState(false)

  const [isNotifyOpen, setIsNotifyOpen] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])


  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {isNotifyOpen ? <NotifyForm setIsNotifyOpen={setIsNotifyOpen} /> :       
        <HomeContent setIsNotifyOpen={setIsNotifyOpen} setActivePage={setActivePage} />
        }
      
        <div className="relative h-screen">
          <div className="relative w-full h-full">
            <div 
              className={`absolute inset-0 bg-[rgb(5.4, 15.3, 33.3)] transition-all duration-1000 ease-in-out ${
                isLoaded ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <div 
              className={`relative w-full h-full transition-all duration-1000 ease-in-out ${
                isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <Image 
                src={homeContent.image.src}
                alt={homeContent.image.alt}
                fill 
                className="object-cover object-center"
                onLoad={() => setIsLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
