// eslint-disable-next-line react-hooks/rules-of-hooks
import "@/app/globals.css"
import { Space_Grotesk } from 'next/font/google'
import { Navbar } from "@/components/navbar"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata = {
  title: "PAVILION - The Reset Button You Have Been Waiting For",
  description: "Transform your body and mind with our comprehensive fitness programs and expert guidance.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${spaceGrotesk.className} bg-black text-white antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

