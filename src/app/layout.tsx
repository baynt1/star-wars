import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './styles/globals.css'
import React from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Star Wars',
  description: 'Star wars page with characters',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className + ' bg-blue-400'}>
        <div className={'w-screen h-screen flex justify-center items-center'}>
          <div className={'bg-white w-9/12 h-3/4 rounded-lg p-5'}>{children}</div>
        </div>
      </body>
    </html>
  )
}
