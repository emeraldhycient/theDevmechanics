import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ServicePage } from '@/components/templates';

const Page = (): React.ReactNode => {
  return (
    <>
      <section className={`lg:px-14 px-3 lg:py-24 md:py-20 py-14`}>
        <h1 className={`lg:text-6xl md:text-4xl text-center text-3xl font-bold py-4 max-w-full w-[60rem] mx-auto lg:leading-[80px] md:leading-[64px] leading-10`}>
          We bring your dreams to life, with optimized processes.
        </h1> <br />
        <p className={`text-center w-[60rem] max-w-full mx-auto lg:text-[20px] md:text-base text-sm font-[400]`}>
          Explore our creative services and experience expert software solutions tailored to any industry. From architecture to implementation, we bring innovation to life.
        </p> <br />

        <div className={`w-fit mx-auto flex gap-x-5`}>
          <button className={`bg-[#9743FF] text-white text-sm py-3 px-8 rounded-full`}>
            Read More
          </button>

          <Link href={``}>
            <p className={`bg-transparent text-sm py-3 px-5 rounded-full`}>
              Get a Quote
            </p>
          </Link>
        </div>
      </section> <br /> <br />

      <section className={`py-3 lg:px-16 md:px-10 px-3`}>
        <Image
          src={`/images/services/banner.svg`}
          width={800}
          height={500}
          className={`w-full object-top lg:h-[200px] h-[100px] object-cover lg:rounded-t-[3rem] rounded-t-3xl`}
          alt='Image'
        /> <br /> <br />

        <p className={`lg:text-base md:text-base text-sm pb-4`}>
          Crafting Innovative Solutions
        </p>

        <h1 className={`lg:text-4xl md:text-2xl text-xl font-[900] py-2 max-w-full w-[50rem]`}>
          Expert Software Architecture, Design, and Implementation Across Industries
        </h1>
      </section> <br />

      <ServicePage /> <br />
    </>
  )
}

export default Page;
