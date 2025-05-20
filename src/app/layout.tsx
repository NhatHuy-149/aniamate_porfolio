import type { Metadata } from "next"
import { Oswald, Roboto } from "next/font/google"
import "./globals.css"

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
})

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Nhat Huy",
  description: "Nhat Huy's portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.variable} ${roboto.variable} antialiased`}>
          {children}
      </body>
    </html>
  )
}
