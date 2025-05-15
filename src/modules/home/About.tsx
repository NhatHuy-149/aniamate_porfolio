"use client"
import { Progress } from "@/components/ui/progress"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import React from "react"
import { useFadeIn } from "@/hooks/useFadeIn"

interface Skill {
  label: string
  value: number
}

interface AboutContent {
  subtitle: string
  title: string
  description: string
  skills: Skill[]
  image: {
    src: string
    alt: string
  }
}

const aboutContent: AboutContent = {
  subtitle: "about us",
  title: "Just awesome\ntemplate",
  description: "I wonder if I've been changed in the night? Let me think. Was I the same when I got up this morning? I almost think I can remember feeling a little different. But if I'm not the same, the next question is 'Who in the world am I?' Ah, that's the great puzzle!",
  skills: [
    { label: "Design", value: 96 },
    { label: "Usability", value: 84 },
    { label: "Development", value: 90 }
  ],
  image: {
    src: "/images/about.png",
    alt: "About section hero image"
  }
}

export const About = () => {
  const { fadeInClass } = useFadeIn()

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className={`left-content m-auto ${fadeInClass}`}>
          <Typography
            variant="span"
            fontFamily="roboto"
            color="primary"
            className="uppercase"
          >
            {aboutContent.subtitle}
          </Typography>
          <Typography
            variant="h2"
            fontWeight="medium"
            fontFamily="oswald"
            color="primary"
            className="uppercase"
          >
            {aboutContent.title}
          </Typography>
          <Typography fontFamily="roboto" color="primary" className="mt-[34px]">
            {aboutContent.description}
          </Typography>
          <div className="flex flex-col gap-8 mt-[34px]">
            {aboutContent.skills.map((skill) => (
              <Progress key={skill.label} value={skill.value}>
                {skill.label}
              </Progress>
            ))}
          </div>
        </div>
        <div className="h-screen relative">
          <Image
            src={aboutContent.image.src}
            alt={aboutContent.image.alt}
            fill
            className="object-cover object-center"
            priority
          />
        </div>
      </div>
    </section>
  )
}

export default About
