'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Links from '@/json/footer.json';

const Footer = () => {
  const icons = [
    {
      "icon": "/icons/IG.svg",
      "link": "https://instagram.com/",
    },
    {
      "icon": "/icons/behance.svg",
      "link": "https://behance.com/",
    },
    {
      "icon": "/icons/dribbble.svg",
      "link": "https://dribbble.com/",
    },
    {
      "icon": "/icons/linkedin.svg",
      "link": "https://linkedin.com/company/",
    },
    {
      "icon": "/icons/twitter.svg",
      "link": "https://x.com/",
    },
  ];

  return (
    <footer className={`[&_p]:text-[#9FA4A6] [&_h3]:font-bold [&_h3]:text-[16px] [&_p]:text-[14px] lg:[&_section]:px-16 md:[&_section]:px-10 [&_section]:px-3 pt-7`}>
      <section className={`flex flex-wrap items-start justify-between gap-x-4 gap-y-8 py-8`}>
        <div className={`lg:w-[13rem] md:w-[13rem] w-full`}>
          <Link href={'mailto:info@devmechanics.com'}>
            <h3>
              info@devmechanics.com
            </h3>
          </Link>
          <p className={`py-3`}>
            89B, Shagari RD, Maryland, Opebi Allen Way, Lagos Nigeria.
          </p> <br /> <br />

          <div className={`flex items-center flex-wrap gap-x-6 gap-y-3`}>
            {
              icons.map((icon, index) => (
                <Link key={index} href={icon.link}>
                  <Image
                    src={icon.icon}
                    alt='Icon'
                    width={56}
                    height={56}
                    className={`p-3 rounded-full bg-[#FCFAFF] w-[40px] h-[40px]`}
                  />
                </Link>
              ))
            }
          </div>
        </div>

        <section className={`flex flex-wrap gap-y-8 items-start gap-x-20`}>
          {Links.map((link, index) => (
            <div key={index} className={`flex flex-col gap-y-5`}>
              <h3>
                {link.title}
              </h3>

              {link.list.map((list, index) => (
                (typeof list === "object") ? (
                  <Link key={index} href={list?.href}>
                    <p>
                      {list?.name}
                    </p>
                  </Link>
                ) : (
                  <p key={index}>
                    {list}
                  </p>
                )
              ))}
            </div>
          ))}

        </section>
      </section> <br />

      <section className={`flex py-6 items-center justify-between`}>
        <Image
          src={`/images/logo.svg`}
          width={142}
          height={14.8}
          className={`lg:w-[10rem] w-[8rem]`}
          alt='Logo'
        />

        <p>
          &copy; {new Date().getFullYear()} DevMechanics
        </p>
      </section>
    </footer >
  )
}

export default Footer;
