import React from "react";
import { Icon } from "../atoms";

const SocialIcons = () => {
	const icons = [
		{
			icon: "/icons/IG.svg",
			link: "https://instagram.com/",
		},
		{
			icon: "/icons/behance.svg",
			link: "https://behance.com/",
		},
		{
			icon: "/icons/dribbble.svg",
			link: "https://dribbble.com/",
		},
		{
			icon: "/icons/linkedin.svg",
			link: "https://linkedin.com/company/",
		},
		{
			icon: "/icons/twitter.svg",
			link: "https://x.com/",
		},
	];

	return (
		<div className={`flex items-center flex-wrap gap-x-6 gap-y-3`}>
			{icons.map((icon, index) => (
				<Icon key={index} link={icon.link} icon={icon.icon} />
			))}
		</div>
	);
};

export default SocialIcons;
