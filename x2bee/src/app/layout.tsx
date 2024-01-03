import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {LayoutType} from "../../model/CommonType";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children } :LayoutType) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
