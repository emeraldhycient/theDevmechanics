import React from "react";
import { Icon } from "../atoms";

const icons: { icon: string; link: string }[] = [
	{
		icon: "/icons/IG.svg",
		link: "https://instagram.com/",
	},
	{
		icon: "/icons/linkedin.svg",
		link: "https://linkedin.com/company/",
	},
	{
		icon: "/icons/twitter.svg",
		link: "https://twitter.com/devmechanics?s=21",
	},
];

const SocialIcons = ({
	className,
	iconData = icons,
	containerClassName,
}: {
	className?: string;
	iconData?: { icon: string; link: string }[];
	containerClassName?: string;
}) => {
	return (
		<div
			className={` flex items-center flex-wrap gap-x-6 gap-y-3 ${containerClassName}`}>
			{iconData.map((icon, index) => (
				<Icon
					key={index}
					link={icon.link}
					icon={icon.icon}
					className={className}
				/>
			))}
		</div>
	);
};

export default SocialIcons;
