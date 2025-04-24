import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import Menu from "./components/Menu"
import MetalScene from "./components/MetalScene"
import Image from "next/image"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Eche's Portfolio | ᚠᛟᚱᛗᛁᛞᚨᛒᛚᛖ ᛞᛖᚢᛖᛚᛟᛈᛖᚱ",
  description:
    "∆≈⌬⌇⌁⌀⍜⍛⍚⍙⍘⍗⍖⍕⍔⍓⍒⍑⍐⍏⍎⍍⍌⍋⍊⍉⍈⍇⍆⍅⍄⍃⍂⍁⍀⌿⌾⌽⌼⌻⌺⌹⌸⌷⌶⌵⌴⌳⌲⌱⌰⌯⌮⌭⌬⌫〉〈⌨⌧⌦⌥⌤⌣⌢⌡⌠⌟⌞⌝⌜⌛⌚⌙⌘⌗⌖⌕⌔⌓⌒⌑⌐⌏⌎⌍⌌⌋⌊⌉⌈⌇⌆⌅⌄⌃⌂⌁⌀",
  keywords: ["developer", "portfolio", "web development", "fullstack", "react", "next.js"],
  authors: [{ name: "Julian Echeverri" }],
  openGraph: {
    title: "Eche's Portfolio | ᚠᛟᚱᛗᛁᛞᚨᛒᛚᛖ ᛞᛖᚢᛖᛚᛟᛈᛖᚱ",
    description:
      "∆≈⌬⌇⌁⌀⍜⍛⍚⍙⍘⍗⍖⍕⍔⍓⍒⍑⍐⍏⍎⍍⍌⍋⍊⍉⍈⍇⍆⍅⍄⍃⍂⍁⍀⌿⌾⌽⌼⌻⌺⌹⌸⌷⌶⌵⌴⌳⌲⌱⌰⌯⌮⌭⌬⌫〉〈⌨⌧⌦⌥⌤⌣⌢⌡⌠⌟⌞⌝⌜⌛⌚⌙⌘⌗⌖⌕⌔⌓⌒⌑⌐⌏⌎⌍⌌⌋⌊⌉⌈⌇⌆⌅⌄⌃⌂⌁⌀",
    type: "website",
    images: [{ url: "/banner.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eche's Portfolio | ᚠᛟᚱᛗᛁᛞᚨᛒᛚᛖ ᛞᛖᚢᛖᛚᛟᛈᛖᚱ",
    description:
      "∆≈⌬⌇⌁⌀⍜⍛⍚⍙⍘⍗⍖⍕⍔⍓⍒⍑⍐⍏⍎⍍⍌⍋⍊⍉⍈⍇⍆⍅⍄⍃⍂⍁⍀⌿⌾⌽⌼⌻⌺⌹⌸⌷⌶⌵⌴⌳⌲⌱⌰⌯⌮⌭⌬⌫〉〈⌨⌧⌦⌥⌤⌣⌢⌡⌠⌟⌞⌝⌜⌛⌚⌙⌘⌗⌖⌕⌔⌓⌒⌑⌐⌏⌎⌍⌌⌋⌊⌉⌈⌇⌆⌅⌄⌃⌂⌁⌀",
    images: [{ url: "/banner.png" }],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white min-h-screen relative`}
      >
        <Menu />
        {/* Main Content */}
        <main className="flex-grow relative z-20">{children}</main>
        {/* Background Scene */}
        <div className="fixed inset-0 z-10 pointer-events-none">
          <MetalScene />
        </div>
      </body>
    </html>
  )
}
