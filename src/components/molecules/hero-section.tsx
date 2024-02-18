import React, { RefObject } from "react";
import SectionContainer from "./section-container.";

type HeroSectionProps = {
	refElement?: RefObject<HTMLDivElement>;
	title: string | React.ReactNode;
	description: string | React.ReactNode;
	containerClassName?: string;
	descriptionClassName?: string;
	child?: React.ReactNode;
};

const HeroSection = ({
	title,
	child,
	description,
	refElement,
	containerClassName,
	descriptionClassName,
}: HeroSectionProps): React.ReactNode => {
	return (
		<SectionContainer
			refElement={refElement}
			containerClassName={`pt-20 pb-10 lg:pt-24 lg:pb-28 ${containerClassName ?? ""}`}
			className={`flex flex-col items-start justify-start `}>
			<div className="hero-header-text opacity-0">
				{typeof title === "string" ? <p>{title}</p> : title}
			</div>
			<div
				className={` font-bold py-4 w-full  ${descriptionClassName ?? ""}`}>
				{typeof description === "string" ? (
					<p>{description}</p>
				) : (
					description
				)}
			</div>
			{child}
		</SectionContainer>
	);
};

export default HeroSection;
