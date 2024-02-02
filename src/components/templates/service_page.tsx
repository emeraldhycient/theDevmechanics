import React from 'react';
import Services from '@/json/services/services.json';
import Image from 'next/image';

const ServicePage = (): React.ReactNode => {
  return (
    <section className={`py-2 flex flex-col gap-y-8 lg:px-14 px-3`}>
      {Services.map((service, index) => (
        <div className={`flex gap-x-36 ${index % 2 == 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col"} py-3 gap-y-10`} key={index}>
          <Image
            src={service.image}
            alt='Service Image'
            width={533.95}
            height={502.62}
            className={`w-[18rem] object-center object-cover`}
          />

          <section className={`flex-1`}>
            <header className={`min-h-[9rem] lg:px-5 px-2 py-2 gap-x-6 flex items-center`}>
              <h1 className={`font-bold lg:text-6xl md:text-3xl text-3xl`}>
                {index + 1}
              </h1>

              <div className={`h-[4rem] w-[1px] bg-[#9743FF33]`}></div>

              <section>
                <h3 className={`lg:text-sm mb-4 text-[12px]`}>
                  {service.heading}
                </h3>
                <h2 className={`font-bold lg:text-[30px] text-2xl`}>
                  {service.title}
                </h2>
              </section>
            </header>

            <div>
              <p className={`text-[#676767] lg:text-[15px] text-sm`}>
                {service.text}
              </p>

              {service.hasPoints && (
                <> <br />
                  <section>
                    <h3 className={`font-bold text-base mb-3`}>
                      {service.points?.title}
                    </h3>

                    <ul className={`flex flex-col gap-y-2 lg:[&_li]:text-[15px] text-[#676767] [&_li]:text-sm`}>
                      {service.points?.points.map((point, index) => (
                        <li key={index} className={`flex gap-x-3 lg:items-center items-start`}>
                          <Image
                            src={`/icons/bullet-point.svg`}
                            alt='Bullet Point Icon'
                            width={16}
                            height={18}
                            className={`w-[13px] lg:mt-0 mt-1`}
                          />

                          <p>
                            {point}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </section>
                </>
              )}
            </div>
          </section>
        </div>
      ))}
    </section>
  )
}

export default ServicePage;
