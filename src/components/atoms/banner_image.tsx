import React from 'react';
import Image from 'next/image';

const BannerImage = ({ image }: { image: string }): React.ReactNode => {
  return (
    <>
      <Image
        src={image}
        width={800}
        height={500}
        className={`w-full object-top lg:h-[200px] h-[100px] object-cover lg:rounded-t-[3rem] rounded-t-3xl`}
        alt='Image'
        priority={true}
      /> <br /> <br />
    </>
  )
}

export default BannerImage;
