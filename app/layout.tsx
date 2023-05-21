import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry';
import LayoutDesignPage from '@/components/layout/layout_design'
import { Roboto } from 'next/font/google';
import { Raleway } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ['400'],
  style:['normal', 'italic'],
  subsets: ['latin'],
})

const raleway = Raleway({
  weight: ['100','200','300','400','700'],
  style:['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Spotify clone',
  description: 'Spotify music clone webApp',
}

export default function RootLayout({ children,}: {
  children: React.ReactNode}){

    const layoutDesign = (<LayoutDesignPage>{children}</LayoutDesignPage>)

  return (
    <html className={raleway.className} lang="en">
      <body>
        <StyledComponentsRegistry>{layoutDesign}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
