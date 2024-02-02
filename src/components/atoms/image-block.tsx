import React from "react";

interface Props {
	src: string;
	alt: string;
	className?: string;
	subContainerClassName?: string;
	containerClassName?: string;
}

const ImageBlock = ({
	src,
	alt,
	className,
	subContainerClassName,
	containerClassName,
}: Props) => {
	return (
		<div className={`relative block ${containerClassName}`}>
			<div className={`block h-full w-full ${subContainerClassName}`}>
				<img
					src={src}
					alt={alt}
					className={`object-cover h-full w-full ${className}`}
				/>
			</div>
		</div>
	);
};

export default ImageBlock;
