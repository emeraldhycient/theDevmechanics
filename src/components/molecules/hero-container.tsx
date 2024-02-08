import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";

type Props = {
	title: string | React.ReactNode;
	description: string;
	firstLink?: string;
	secondLink?: string;
	firstLinkText?: string;
	secondLinkText?: string;
	LinkParent?: React.ReactNode;
	containerClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	icon?: React.ReactNode;
};

const HeroContainer: React.FC<Props> = ({
	title,
	description,
	firstLink,
	secondLink,
	firstLinkText = "Explore Jobs",
	secondLinkText = "Learn More",
	LinkParent,
	containerClassName,
	descriptionClassName,
	titleClassName,
	icon,
}) => {
	return (
		<div
			className={`flex flex-col justify-center items-center gap-4  ${containerClassName}`}>
			<div
				className={`text-center text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-medium leading-[3rem] md:leading-[4rem] lg:leading-[5rem] w-full  ${titleClassName}`}>
				{title}
			</div>
			<div
				className={`text-center text-neutral-900 font-normal leading-[35px] w-full ${descriptionClassName}`}>
				{description}
			</div>
			<div className="mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center gap-x-4 gap-y-5">
				{LinkParent ? (
					LinkParent
				) : (
					<>
						{firstLink && (
							<Link
								href={firstLink}
								className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-[1.875rem] py-3.5 rounded-full bg-[#9743FF]">
								<span>{firstLinkText}</span>{" "}
								{icon ? (
									<>{icon}</>
								) : (
									<span>
										<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
									</span>
								)}
							</Link>
						)}
						{secondLink && (
							<Link
								href={secondLink}
								className="text-sm text-primary-blue no-underline capitalize px-[1.875rem] py-3 rounded-full bg-primary-white min-h-fit min-w-fit ">
								{secondLinkText}
							</Link>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default HeroContainer;
