import React from "react";
import StarIcon from "../../../public/icons/star-icon";
import TestimonialCard from "./testimonial-card";

type Props = {index: number};

const StoryItem = (props: Props) => {
	const maxStars = 5;
	const rating = 3;

	return (
		<div
			className="bg-white rounded-[40px] py-10 px-10 gap-10 flex flex-col lg:flex-row items-center md:items-start lg:items-center 
        w-full lg:min-w-[55rem] cursor-grab
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

			<TestimonialCard
				name="Dominic Praise"
				maxStars={5}
				message="The DevMechanics didn&lsquo;t just provide a service;
						they delivered a transformation to our business process.
						Their bespoke software solution has been a game-changer
						in how we operate and serve our customers."
				position="CEO at Frameio Stores"
				rating={3}
			/>
		</div>
	);
};

export default StoryItem;
