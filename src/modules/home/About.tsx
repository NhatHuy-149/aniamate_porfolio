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
  highlight: string
  description: string
  skills: Skill[]
  image: {
    src: string
    alt: string
  }
}

const aboutContent: AboutContent = {
  subtitle: "about me",
  title: "Hello, ",
  highlight: "I'm Nhat Huy!",
  description: "A motivated frontend developer with 2+ years of experience specializing in building responsive, high-performance websites and user interfaces. Proficient in ReactJS, NextJS, and GatsbyJS. Quick learner with strong problem-solving skills and a solid foundation in modern frontend development.",
  skills: [
    { label: "Tech stack", value: 90 },
    { label: "UX/UI", value: 90 },
    { label: "Communication", value: 90 }
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
            <br />
            {aboutContent.highlight}
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
