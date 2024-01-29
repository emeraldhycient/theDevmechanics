import { Header } from '@/components/molecules';
import { Footer } from '@/components/templates';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default Layout;
