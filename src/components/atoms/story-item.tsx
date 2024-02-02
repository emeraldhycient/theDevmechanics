import React from "react";
import StarIcon from "../../../public/icons/star-icon";

type Props = {index: number};

const StoryItem = (props: Props) => {
	const maxStars = 5;
	const rating = 3;
	console.log(props.index);
	// desktop: w-full min-w-[55rem]
	return (
		<div
			className="bg-white rounded-[40px] py-10 px-10 gap-10 flex flex-col lg:flex-row items-center 
        w-full lg:min-w-[55rem]
        "
		>
			<div className="relative block">
				<div className="block overflow-hidden relative h-[18rem] w-[20rem] sm:w-[22rem] md:w-[20rem] rounded-3xl">
					<img
						src={`/images/preview.png`}
						alt="project-image"
						className="absolute top-0 left-0 object-cover h-[18rem] w-full rounded-lg"
					/>
				</div>
			</div>

			<div className="w-full flex flex-col justify-start items-start gap-5">
				<div className="justify-start items-center gap-4 inline-flex">
					<div className="justify-start items-center gap-2.5 flex">
						{Array.from({ length: maxStars }).map((_, index) => (
							<StarIcon
								key={index}
								className={
									index < rating
										? "fill-blue-600"
										: "stroke-black"
								}
								fill={index < rating ? "blue" : "transparent"}
								empty={index < rating ? false : true}
							/>
						))}
					</div>
					<div className="text-neutral-900 text-sm font-semibold ">
						{rating}.0
					</div>
				</div>
				<div className="flex-col justify-center items-start gap-3 flex">
					<div className=" text-neutral-900 text-base font-normal leading-[30px]">
						“The DevMechanics didn&lsquo;t just provide a service;
						they delivered a transformation to our business process.
						Their bespoke software solution has been a game-changer
						in how we operate and serve our customers.”
					</div>
				</div>
				<div>
					<span className="text-neutral-900 text-base font-semibold  leading-7">
						Dominic Praise,{" "}
					</span>
					<span className="text-neutral-900 text-sm font-medium  leading-7">
						CEO at Frameio Stores
					</span>
				</div>
			</div>
		</div>
	);
};

export default StoryItem;
