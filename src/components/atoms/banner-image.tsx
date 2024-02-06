import React from "react";
import Image from "next/image";

type Props = {
	src: string;
	width?: number;
	height?: number;
	className?: string;
	alt?: string;
};
const BannerImage = ({
	src,
	width = 800,
	height = 500,
	className = "",
	alt = "Image",
}: Props) => {
	return (
		<Image
			src={src}
			width={800}
			height={500}
			className={`w-full object-center ${className} h-[100px] md:h-[150px] lg:h-[200px] object-cover rounded-t-3xl lg:rounded-t-[3rem] `}
			alt={alt}
			priority={true}
		/>
	);
};

export default BannerImage;
