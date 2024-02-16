import React from "react";
import Link from "next/link";
import Image from "next/image";

const Icon = ({
	icon,
	link,
	className,
}: {
	icon: string;
	link: string;
	className?: string;
}) => {
	return (
		<div className=" overflow-y-hidden">
			<Link className="" href={link}>
				<Image
					src={icon}
					alt="Icon"
					width={56}
					height={56}
					className={`hero-social-media-icons p-3 rounded-full bg-[#FCFAFF] w-[45px] h-[45px] ${className}`}
				/>
			</Link>
		</div>
	);
};

export default Icon;
