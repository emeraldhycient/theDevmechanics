import Link from 'next/link';
import React from 'react'
import ArrowIcon from '../../../public/icons/arrow-icon';
import LocationIcon from '../../../public/icons/location-icon';

type Props = {
	location: string
	title: string
	description: string
    link: string;
};

const JobOpeningItem = ({description, link, location, title}: Props) => {
  return (
		<div className="flex flex-col justify-center items-start gap-6">
			<div className="flex justify-start items-center gap-2">
				<div className="flex justify-center items-center ">
					<LocationIcon
						className="stroke-neutral-400"
						stroke="text-neutral-400"
					/>
				</div>
				<div className="flex flex-row items-center text-neutral-400 text-sm font-normal leading-7">
					<p>{location}</p>
				</div>
			</div>
			<div className="text-neutral-900 text-2xl font-semibold ">
				Product Designer
			</div>
			<div className="text-neutral-900 text-base font-normal leading-[35px]">
				Are you passionate about creating intuitive and beautiful
				experiences that solve real problems? We&apos;re searching for a
				talented Product Designer to join our growing team and play a
				key role in shaping the future of our product.
			</div>
			<div className=" flex flex-row items-end justify-end w-full">
				<Link
					href=""
					id=""
					className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
						hover:text-[#141515] hover:bg-white hover:border-white ease-linear duration-500"
				>
					<span>Read More</span>{" "}
					<span>
						<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
					</span>
				</Link>
			</div>
		</div>
  );
}

export default JobOpeningItem