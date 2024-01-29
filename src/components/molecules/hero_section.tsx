import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const HeroSection = (): React.ReactNode => {
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
    <>
      <section className={`lg:px-16 md:px-10 px-3 py-8`}>
        <p className={`lg:text-base md:text-base text-sm`}>
          Software Design Agency
        </p>

        <h1 className={`lg:text-6xl md:text-4xl text-3xl font-bold py-4 max-w-full w-[60rem] lg:leading-[80px] md:leading-[64px] leading-10`}>
          We build custom software to meet your unique needs, driving Efficiency & <span className={`text-[#9743FF]`}>Organization</span>.
        </h1> <br />

        <div className={`flex items-center lg:mt-5 flex-wrap gap-x-6 gap-y-3`}>
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
      </section> <br />
    </>
  )
}

export default HeroSection;
