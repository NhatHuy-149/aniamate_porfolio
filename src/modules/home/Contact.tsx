"use client"
import { Typography } from "@/components/ui/typography"
import React, { useState } from "react"
import Map from "@/components/Map"
import { Button } from "@/components/ui/button"
import { useFadeIn } from "@/hooks/useFadeIn"
import Greeting from "@/components/layout/Greeting"
interface ContactInfo {
  title: string
  subtitle: string
  description: string
  sections: {
    title: string
    content: string | { text: string; link: string }[]
  }[]
  buttonText: string
}

const contactContent: ContactInfo = {
  title: "Welcome to our new office",
  subtitle: "contact",
  description:
    "Our website is under construction but we are ready to go! You can call us or leave a request here. We are always glad to see you in our office from 9:00 to 18:00.",
  sections: [
    {
      title: "Contact Us",
      content: "11 West 53 Street\nNew York, NY\n10019",
    },
    {
      title: "Follow us",
      content: [
        { text: "Facebook", link: "https://www.facebook.com/uniq.com" },
        { text: "Facebook", link: "https://www.facebook.com/uniq.com" },
        { text: "Facebook", link: "https://www.facebook.com/uniq.com" },
      ],
    },
    {
      title: "Phone",
      content: [{ text: "+1 212-708-9400", link: "tel:+1 212-708-9400" }],
    },
    {
      title: "Email",
      content: [{ text: "info@uniq.com", link: "mailto:info@uniq.com" }],
    },
  ],
  buttonText: "Say Hello",
}

const ContactInfo = ({ setIsGreetingOpen }: { setIsGreetingOpen: (isOpen: boolean) => void }) => {
  const { fadeInClass } = useFadeIn()
  return (
    <div className={`left-content m-auto ${fadeInClass}`}>
    <Typography
      variant="span"
      fontFamily="roboto"
      color="primary"
      className="uppercase"
    >
      {contactContent.subtitle}
    </Typography>
    <Typography
      variant="h2"
      fontWeight="medium"
      fontFamily="oswald"
      color="primary"
      className="uppercase"
    >
      {contactContent.title}
    </Typography>
    <Typography
      fontFamily="roboto"
      color="primary"
      className="mt-[34px]"
    >
      {contactContent.description}
    </Typography>
    <div className="grid grid-cols-2 gap-4 justify-between mt-[34px]">
      {contactContent.sections.map((section, index) => (
        <div key={index}>
          <Typography
            variant="h5"
            fontFamily="oswald"
            color="primary"
            className="uppercase"
          >
            {section.title}
          </Typography>
          <Typography
            variant="p"
            fontFamily="roboto"
            color="primary"
            className="text-[#ffffff99] mt-[4px]"
          >
            {typeof section.content === "string"
              ? section.content.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    {i <
                      (section.content as string).split("\n").length -
                        1 && <br />}
                  </React.Fragment>
                ))
              : section.content.map((item, i) => (
                  <React.Fragment key={i}>
                    <a href={item.link}>{item.text}</a>
                    {i < section.content.length - 1 && <br />}
                  </React.Fragment>
                ))}
          </Typography>
        </div>
      ))}
    </div>
    <Button variant="default" className="mt-[34px]" onClick={() => setIsGreetingOpen(true)}>
      {contactContent.buttonText}
    </Button>
  </div>
  )
} 


export const Contact = () => {
  const [isGreetingOpen, setIsGreetingOpen] = useState(false)

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2">
        {isGreetingOpen ? (
          <Greeting setIsGreetingOpen={setIsGreetingOpen} />
        ) : (
          <ContactInfo setIsGreetingOpen={setIsGreetingOpen} />
        )}

        <div className="h-screen relative">
          <Map />
        </div>
      </div>
    </section>
  )
}

export default Contact
