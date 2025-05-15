"use client"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import React from "react"
import { useFadeIn } from "@/hooks/useFadeIn"

const NotifyForm = ({ setIsNotifyOpen }: { setIsNotifyOpen: (isOpen: boolean) => void }) => {
  const { fadeInClass } = useFadeIn()
  return (
    <div className={`w-full left-content m-auto flex flex-col justify-center items-center ${fadeInClass}`}>
      <button
        className="group self-start mb-8 text-white text-3xl font-light hover:opacity-80 hover:cursor-pointer relative w-8 h-8"
        aria-label="Close"
        onClick={() => setIsNotifyOpen(false)}
      >
        <span
          className="
            absolute left-0 top-1/2 w-8 h-0.5 bg-white transition-all duration-300
            rotate-45 group-hover:rotate-0 group-hover:top-1/2
          "
        ></span>
        <span
          className="
            absolute left-0 top-1/2 w-8 h-0.5 bg-white transition-all duration-300
            -rotate-45 group-hover:rotate-0 group-hover:top-1/2
          "
        ></span>
      </button>
      <form className="w-full max-w-md bg-transparent flex flex-col gap-8">
        <div>
          <Typography
            variant="span"
            fontFamily="roboto"
            color="primary"
            className="tracking-widest mb-1 font-medium uppercase"
          >
            NOTIFY ME
          </Typography>
          <Typography
            variant="h2"
            fontWeight="extrabold"
            fontFamily="oswald"
            color="primary"
            className="uppercase mb-6"
          >
            GET EARLY ACCESS!
          </Typography>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <input
              type="email"
              required
              placeholder="Email Address*"
              className="w-full bg-transparent border-b border-gray-300 text-white py-2 px-0 focus:outline-none focus:border-cyan-400 placeholder-gray-400"
            />
          </div>
        </div>
        <Button type="submit" className="mt-4 w-32">
          NOTIFY
        </Button>
      </form>
    </div>
  )
}

export default NotifyForm
