"use client"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import React from "react"
import { useFadeIn } from "@/hooks/useFadeIn"
import featureIcon1 from "../../../public/icons/features/feature-icon-1.svg"
import featureIcon2 from "../../../public/icons/features/feature-icon-2.svg"

interface Feature {
  icon: string
  title: string
}

interface Project {
  image: {
    src: string
    alt: string
  }
  name?: string
  category?: string
}

interface PortfolioContent {
  subtitle: string
  title: string
  description: string
  features: Feature[]
  projects: Project[]
}

const portfolioContent: PortfolioContent = {
  subtitle: "Portfolio",
  title: "Featured\nprojects",
  description: "Be what you would seem to be – or, if you'd like it put more simply – never imagine yourself not to be otherwise than what it might appear to others that what you were or might have been was not otherwise than what you had been would have appeared to them to be otherwise.",
  features: [
    { icon: featureIcon1, title: "Eye catching design" },
    { icon: featureIcon1, title: "Eye catching design" },
    { icon: featureIcon1, title: "Eye catching design" },
    { icon: featureIcon1, title: "Eye catching design" }
  ],
  projects: [
    {
      image: { src: "/images/about.png", alt: "Hero Image" },
      name: "Project Name",
      category: "creative"
    },
    {
      image: { src: "/images/about.png", alt: "Hero Image" }
    },
    {
      image: { src: "/images/about.png", alt: "Hero Image" }
    },
    {
      image: { src: "/images/about.png", alt: "Hero Image" }
    }
  ]
}

export const Portfolio = () => {
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
            {portfolioContent.subtitle}
          </Typography>
          <Typography
            variant="h2"
            fontWeight="medium"
            fontFamily="oswald"
            color="primary"
            className="uppercase"
          >
            {portfolioContent.title}
          </Typography>
          <Typography fontFamily="roboto" color="primary" className="mt-[34px]">
            {portfolioContent.description}
          </Typography>
          <div className="grid grid-cols-2 gap-4 justify-between mt-[34px]">
            {portfolioContent.features.map((feature, index) => (
              <div key={index} className="flex flex-row items-center gap-4">
                <Image
                  src={feature.icon}
                  alt="feature-icon"
                  className="w-[54px] h-[54px] max-xl:w-[46px] max-xl:h-[46px]"
                />
                <Typography
                  variant="h4"
                  fontFamily="oswald"
                  color="primary"
                  className="uppercase"
                >
                  {feature.title}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className="h-screen relative grid grid-cols-2">
          {portfolioContent.projects.map((project, index) => (
            <div key={index} className="relative">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover object-center"
              />
              {project.name && (
                <div className="px-4 absolute bottom-[24px] w-full">
                  <div className="py-[22px] px-[24px] bg-white">
                    <Typography
                      variant="h3"
                      fontFamily="oswald"
                      className="uppercase"
                    >
                      {project.name}
                    </Typography>
                    {project.category && (
                      <Typography
                        variant="span"
                        fontFamily="oswald"
                        className="uppercase text-[#757575]"
                      >
                        {project.category}
                      </Typography>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
