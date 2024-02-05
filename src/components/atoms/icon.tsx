import React from "react";
import Link from "next/link";
import Image from "next/image";

const Icon = ({ icon, link }: { icon: string; link: string }) => {
	return (
		<>
			<Link href={link}>
				<Image
					src={icon}
					alt="Icon"
					width={56}
					height={56}
					className={`p-3 rounded-full bg-[#FCFAFF] w-[40px] h-[40px]`}
				/>
			</Link>
		</>
	);
};

export default Icon;
