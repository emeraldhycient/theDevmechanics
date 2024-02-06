import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import LocationIcon from "../../../public/icons/location-icon";
import BriefCaseIcon from "../../../public/icons/brief-case-icon";
import MoneyIcon from "../../../public/icons/money-icon";

type Props = {
	location: string;
	title: string;
	description: string;
	link: string;
};

const JobOpeningApplyButton = ({ className }: { className?: string }) => {
	return (
		<Link
			href=""
			id=""
			className={`group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
						hover:text-[#141515] hover:bg-white hover:border-white ease-linear duration-500 ${className}`}>
			<span>Apply</span>{" "}
			<span>
				<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
			</span>
		</Link>
	);
};

const JobOpeningItem = ({ description, link, location, title }: Props) => {
	return (
		<div className="flex flex-col justify-center items-start gap-6">
			<div className="flex flex-row items-center justify-between w-full">
				<div className="flex flex-row items-center gap-6">
					<div className="border w-16 h-16"></div>
					<div className="flex flex-col items-start justify-start gap-1">
						<div className="text-neutral-900 text-2xl font-semibold ">
							<p>Product Designer</p>
						</div>
						<div className="">
							<p>Dev Mechanics</p>
						</div>
					</div>
				</div>
				<JobOpeningApplyButton className="!py-2 !hidden mx:!flex" />
			</div>
			<div className="text-neutral-900 text-base font-normal leading-[35px]">
				Are you passionate about creating intuitive and beautiful
				experiences that solve real problems? We&apos;re searching for a
				talented Product Designer to join our growing team and play a
				key role in shaping the future of our product.
			</div>
			<div className=" flex flex-row flex-wrap items-center w-full gap-9">
				<div className="flex justify-center items-center gap-3">
					<LocationIcon
						className="stroke-neutral-400"
						stroke="text-neutral-400"
					/>
					<p>Lagos</p>
				</div>

				<div className="flex justify-center items-center gap-3">
					<BriefCaseIcon
						className="stroke-neutral-400"
						stroke="text-neutral-400"
					/>
					<p>Remote</p>
				</div>
				<div className="flex justify-center items-center gap-3">
					<MoneyIcon
						className="stroke-neutral-400"
						stroke="text-neutral-400"
					/>
					<p>$40k</p>
				</div>
			</div>
			<JobOpeningApplyButton className="!py-2 mx:!hidden" />
		</div>
	);
};

export default JobOpeningItem;
