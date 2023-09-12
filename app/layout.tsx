import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Public_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const public_sans = Public_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Brandon Kim',
    description: 'portfolio for Brandon Kim',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={public_sans.className}>
                {children}
            </body>
        </html>
    )
}
