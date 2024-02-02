"use client";

import { SocialIcons } from '@/components/molecules';
import Link from 'next/link';
import React, { useState } from 'react';
import ProjectTypes from '@/json/contact/project_types.json';
import Services from "@/json/contact/available_services.json";

const Page = (): React.ReactNode => {
  const [services, setServices] = useState<string[]>([]);
  const [projectType, setProjectType] = useState<string[]>([]);

  const addOrRemoveItem = (setter: React.Dispatch<React.SetStateAction<string[]>>, array: string[], item: string) => {
    if (array.includes(item)) {
      let copyArray = [...array];
      let position = copyArray.indexOf(item);
      copyArray.splice(position, 1);

      setter(copyArray);
      return;
    }

    setter((values) => ([...values, item]));
  }

  return (
    <>
      <section className={`lg:px-14 px-3 py-14 flex items-start lg:flex-row gap-x-36 gap-y-8 md:flex-row flex-col`}>
        <div>
          <p className={`text-[#9FA4A6] text-sm`}>
            Send us an email
          </p>

          <Link href={`mailto:info@devmechanics.com`}>
            <p className={`text-base font-bold`}>
              info@devmechanics.com
            </p>
          </Link> <br />

          <p className={`text-[#9FA4A6] text-sm mt-3`}>
            Follow us
          </p>
          <SocialIcons />
        </div>

        <section className={`flex-1`}>
          <h1 className={`font-bold lg:text-5xl md:text-4xl text-3xl`}>
            Hey! Got A Project?
          </h1><br />

          <p className={`text-base mt-3 mb-3`}>
            Your project&apos;s type
          </p>
          <div className={`flex gap-x-3 flex-wrap gap-y-2`}>
            {ProjectTypes.map((type, index) => (
              <button onClick={() => { addOrRemoveItem(setProjectType, projectType, type) }} key={index} className={`${projectType.includes(type) ? "text-white bg-[#9743FF]" : "bg-[#FCFAFF]"} duration-100 lg:text-sm md:text-sm text-xs py-2 px-5`}>
                {type}
              </button>
            ))}
          </div> <br />

          <p className={`text-base mt-3 mb-3`}>
            Services you need
          </p>
          <div className={`flex gap-x-3 flex-wrap gap-y-2`}>
            {Services.map((service, index) => (
              <button onClick={() => { addOrRemoveItem(setServices, services, service) }} key={index} className={`${services.includes(service) ? "text-white bg-[#9743FF]" : "bg-[#FCFAFF]"} duration-100 lg:text-sm md:text-sm text-xs py-2 px-5`}>
                {service}
              </button>
            ))}
          </div>
        </section>
      </section>
    </>
  )
}

export default Page;
