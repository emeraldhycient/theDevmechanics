import { Header } from '@/components/molecules';
import React from 'react'

const Layout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <main>
      <Header />
    </main>
  )
}

export default Layout;
