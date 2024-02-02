import Image from 'next/image';
import React from 'react';
import ServicesList from '@/json/services.json';

const Services = (): React.ReactNode => {
  return (
    <>
      <section className={`py-3 lg:px-16 md:px-10 px-3`}>
        <Image
          src={`/images/services.svg`}
          width={800}
          height={500}
          className={`w-full object-top lg:h-[200px] h-[100px] object-cover lg:rounded-t-[3rem] rounded-t-3xl`}
          alt='Image'
        /> <br /> <br />

        <p className={`lg:text-base md:text-base text-sm`}>
          Solution For Every Factor
        </p>

        <h1 className={`lg:text-3xl md:text-2xl text-xl font-[1000] py-2 max-w-full w-[40rem]`}>
          Software architecture, design and implementation for any industry 🔥
        </h1> <br />

        <section className={`flex flex-wrap items-start gap-x-9 gap-y-6 justify-center lg:justify-normal md:justify-normal`}>
          {ServicesList.map((service, index) => (
            <div key={index} className={`lg:w-[250px] hover:shadow-sm duration-150 md:w-[250px] w-full h-[300px] flex flex-col justify-between py-6 px-4 border border-[#FCFAFF] rounded-[29.245px]`}>
              <section>
                <Image
                  src={service.icon}
                  width={62.39}
                  height={62.39}
                  className={`w-[62px] h-[62px]`}
                  alt=''
                />

                <h3 className={`font-bold text-base py-3 capitalize`}>
                  {service.title}
                </h3>
              </section>

              <p className={`text-sm`}>
                {service.writeup}
              </p>
            </div>
          ))}
        </section>
      </section> <br />
    </>
  )
}

export default Services;
