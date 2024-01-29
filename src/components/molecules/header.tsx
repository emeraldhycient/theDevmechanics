"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import Links from '@/json/nav.json';
import { IoReorderTwoOutline } from "react-icons/io5";

const Header = (): React.ReactNode => {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <header className={`flex relative duration-200 justify-between py-6 lg:px-14 md:px-10 px-3 "items-center" sticky top-0 left-0 text-sm z-100 bg-white`}>
      <Link href={'/'}>
        <Image
          src={`/images/logo.svg`}
          alt='Logo'
          width={142}
          height={14.8}
          className={`w-[10rem]`}
        />
      </Link>

      <section className={`lg:flex md:flex hidden items-center gap-x-24`}>
        <nav>
          <ul className={`text-sm flex items-center gap-x-12`}>
            {Links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <p>
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <section className={`[&_button]:text-sm flex gap-x-3 [&_button]:rounded-full [&_button]:py-3 [&_button]:px-5`}>
          <button>
            Get a Quote
          </button>

          <Link href={'/contact'}>
            <button className={`bg-[#9743FF] text-white`}>
              Contact Us
            </button>
          </Link>
        </section>
      </section>

      <button className={`lg:hidden md:hidden block text-2xl`} onClick={() => { setMobileNavOpen(!mobileNavOpen) }}>
        <IoReorderTwoOutline />
      </button>

      <div className={`bg-white w-full overflow-hidden ${!mobileNavOpen ? "-translate-[100%] py-0 h-0" : "translate-[120%] py-4 h-[100vh]"} absolute top-14 left-0 duration-300 px-4`}>
        <nav>
          <ul className={`flex flex-col gap-y-6 w-fit mx-auto [&_li]:text-center [&_li]:text-xl`}>
            {Links.map((link, index) => (
              <li key={index}>
                <Link href={link.href}>
                  <p>
                    {link.name}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;
