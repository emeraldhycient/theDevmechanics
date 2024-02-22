import Link from "next/link";
import React from "react";
import LinkedIn from "../../../public/icons/linked-in";
import ImageBlock from "./image-block";

type Props = {
	className?: string;
	name: string;
	linkedin: string;
	position: string;
	image: string;
};

const TeamItem = ({ className, linkedin, name, position, image }: Props) => {
	console.log("images", image);
	return (
		<div className={` w-full flex flex-col gap-4 ${className}`}>
			<ImageBlock
				src={`${image}`}
				subContainerClassName="block overflow-hidden relative !h-[20rem] !w-full"
				className="!absolute !top-0 !left-0"
				alt="team-image"
			/>

			<div className="w-full justify-start items-center flex">
				<div className="flex-col justify-center items-start gap-2 flex  w-[75%]">
					<div className="text-neutral-900 text-base font-medium w-full truncate  overflow-x-hidden">
						{name}
					</div>
					<div className="text-neutral-400 text-xs font-normal w-full truncate  overflow-x-hidden">
						{position}
					</div>
				</div>

				<div className="ml-auto rounded-full flex flex-col items-center justify-center w-[30px] h-[30px] relative border bg-neutral-900 overflow-hidden">
					<a
						className="relative flex flex-row items-center justify-center w-full h-full align-middle"
						href={linkedin}
						target="_blank"
						rel="noopener noreferrer">
						<LinkedIn
							width="15"
							height="15"
							className="flex flex-row items-center justify-center "
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamItem;
