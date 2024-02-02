import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
  title: "The Devmechanics | Services",
  description: " We bring your dreams to life, with optimized processes.",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
    </>
  )
}

export default Layout;
