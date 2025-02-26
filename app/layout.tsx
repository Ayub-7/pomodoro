import type React from "react"
import { Providers } from "./providers"
import { Inter } from "next/font/google"
import "./globals.css"
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}



import './globals.css'

export const metadata = {
  generator: 'v0.dev'
};
