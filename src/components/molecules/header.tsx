import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Links from '@/json/nav.json';

const Header = (): React.ReactNode => {
  return (
    <header className={`flex justify-between py-6 px-14 items-center sticky top-0 left-0 text-sm`}>
      <Link href={'/'}>
        <Image
          src={`/images/logo.svg`}
          alt='Logo'
          width={142}
          height={14.8}
          className={`w-[10rem]`}
        />
      </Link>

      <section className={`flex items-center gap-x-24`}>
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
    </header>
  )
}

export default Header;
