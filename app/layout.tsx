import './globals.css'
import { Inter } from 'next/font/google'
import StyledComponentsRegistry from './lib/registry';
import LayoutDesignPage from '@/components/layout/layout_design'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Spotify clone',
  description: 'Spotify music clone webApp',
}

export default function RootLayout({ children,}: {
  children: React.ReactNode}){

    const layoutDesign = (<LayoutDesignPage>{children}</LayoutDesignPage>)

  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>{layoutDesign}</StyledComponentsRegistry>
      </body>
    </html>
  )
}
