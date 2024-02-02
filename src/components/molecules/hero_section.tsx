import React from 'react';
import { SocialIcons } from '.';

const HeroSection = (): React.ReactNode => {
  return (
    <>
      <section className={`lg:px-16 md:px-10 px-3 py-8`}>
        <p className={`lg:text-base md:text-base text-sm`}>
          Software Design Agency
        </p>

        <h1 className={`lg:text-6xl md:text-4xl text-3xl font-bold py-4 max-w-full w-[60rem] lg:leading-[80px] md:leading-[64px] leading-10`}>
          We build custom software to meet your unique needs, driving Efficiency & <span className={`text-[#9743FF]`}>Organization</span>.
        </h1> <br />

        <SocialIcons />
      </section> <br />
    </>
  )
}

export default HeroSection;
