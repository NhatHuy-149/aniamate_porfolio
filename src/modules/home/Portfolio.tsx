"use client"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import React from "react"
import { useFadeIn } from "@/hooks/useFadeIn"
import featureIcon1 from "../../../public/icons/features/feature-icon-1.svg"
import featureIcon2 from "../../../public/icons/features/feature-icon-2.svg"
import featureIcon3 from "../../../public/icons/features/feature-icon-3.svg"
import featureIcon4 from "../../../public/icons/features/feature-icon-4.svg"
import Link from "next/link"


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
  url?: string
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
  description: "Welcome to my portfolio! I'm a Frontend Developer who loves building beautiful and functional web applications. Here you'll find a showcase of my personal projects, each crafted with attention to detail and modern web technologies.",
  features: [
    { icon: featureIcon1, title: "Modern UI/UX Design" },
    { icon: featureIcon2, title: "Custom Color Schemes" },
    { icon: featureIcon3, title: "Mobile-First Approach" },
    { icon: featureIcon4, title: "Interactive Components" }
  ],
  projects: [
    {
      image: { src: "/images/features/feature-image-1.png", alt: "Hero Image" },
      name: "Pyramid",
      category: "E-commerce",
      url: "https://pyramid.tech/"
    },
    {
      image: { src: "/images/features/feature-image-2.png", alt: "Hero Image" },
      name: "Portfolio",
      category: "Landing Page",
      url: "https://nhathuydev.vercel.app/"
    },
    {
      image: { src: "/images/features/feature-image-3.png", alt: "Hero Image" },
      name: "Project Name",
      category: "Landing Page",
      url: "https://nhathuydev.vercel.app/"
    },
    {
      image: { src: "/images/features/feature-image-4.png", alt: "Hero Image" },
      name: "Project Name",
      category: "Landing Page",
      url: "https://nhathuydev.vercel.app/"
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
            <Link key={index} href={project.url || ""} className="relative group">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                fill
                className="object-cover object-center"
              />
              {project.name && (
                <div className="px-4 absolute bottom-[-100%] w-full transition-all duration-500 group-hover:bottom-[24px]">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
