import { useEffect, useState } from 'react'

export const useFadeIn = (delay: number = 100) => {
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  return {
    showContent,
    fadeInClass: `transition-all duration-1000 ease-in-out ${
      showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`
  }
} 