import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Links from '@/json/nav.json';
import { IoReorderTwoOutline } from "react-icons/io5";

const Header = (): React.ReactNode => {
  return (
    <header className={`flex justify-between py-6 lg:px-14 md:px-10 px-4 items-center sticky top-0 left-0 text-sm`}>
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

      <button className={`lg:hidden md:hidden block text-2xl`}>
        <IoReorderTwoOutline />
      </button>
    </header>
  )
}

export default Header;
