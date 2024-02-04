import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import Link from "next/link";

type Props = {
	title: string;
	description: string;
	exploreJobsLink: string;
	learnMoreLink: string;
	containerClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	linkContainerClassName?: string;
	exploreJobsLinkClassName?: string;
	learnMoreLinkClassName?: string;
};

const HeroBanner = ({
	title,
	description,
	exploreJobsLink,
	learnMoreLink,
	containerClassName = "",
	titleClassName = "",
	descriptionClassName = "",
	linkContainerClassName = "",
	exploreJobsLinkClassName = "",
	learnMoreLinkClassName = "",
}: Props) => {
	return (
		<div
			className={`flex flex-col justify-center items-center gap-6 ${containerClassName}`}
		>
			<div
				className={`text-center text-neutral-900 text-5xl font-semibold leading-[84px] ${titleClassName}`}
			>
				{title}
			</div>
			<div
				className={`text-center text-neutral-900 font-normal leading-[35px] md:w-[52%] ${descriptionClassName}`}
			>
				{description}
			</div>
			<div
				className={`mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center gap-x-3 gap-y-5 ${linkContainerClassName}`}
			>
				<Link
                    // to={exploreJobsLink}
                    href=""
					className={`group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
          hover:text-[#141515] hover:bg-white hover:border-white ease-linear duration-500 ${exploreJobsLinkClassName}`}
				>
					<span>Explore Jobs</span>
					<span>
						<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
					</span>
				</Link>
				<Link
                    // to={learnMoreLink}
                    href=""
					className={`text-sm text-primary-blue no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-[#FBF3EF] hover:text-[#9743FF] hover:bg-white hover:border-primary-white ease-linear duration-500 ${learnMoreLinkClassName}`}
				>
					Learn More
				</Link>
			</div>
		</div>
	);
};

export default HeroBanner;
