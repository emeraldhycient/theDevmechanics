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
			<div className="mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center gap-x-3 gap-y-5">
				{LinkParent ? (
					LinkParent
				) : (
					<>
						{firstLink && (
							<Link
								href={firstLink}
								className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-gradient-to-r from-purple-500 to-purple-700 min-h-fit min-w-fit border border-[#9743FF]
                hover:text-[#141515] hover:bg-white ease-linear duration-500">
								<span>{firstLinkText}</span>{" "}
								<span>
									<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
								</span>
							</Link>
						)}
						{secondLink && (
							<Link
								href={secondLink}
								className="text-sm text-primary-blue no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-[#FBF3EF] hover:text-[#9743FF] hover:bg-white hover:border-primary-white ease-linear duration-500">
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
