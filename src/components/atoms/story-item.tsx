import React from "react";
import StarIcon from "../../../public/icons/star-icon";
import TestimonialCard from "./testimonial-card";

type Props = {
	index: number;
	className?: string;
	testimonyStarClassName?: string;
	name: string;
	position: string;
	comment: string;
	image: string;
	rating: number;
	company: string;
};

const StoryItem = ({
	index,
	className,
	testimonyStarClassName,
	comment,
	company,
	image,
	name,
	position,
	rating,
}: Props) => {
	return (
		<div
			className={`bg-white rounded-[40px] py-10 px-10 gap-10 flex flex-col lg:flex-row items-center md:items-start lg:items-center 
        w-full lg:min-w-[55rem] cursor-grab ${className}`}>
			<div className="relative block">
				<div className="block overflow-hidden relative h-[18rem] w-[20rem] sm:w-[22rem] md:w-[20rem] rounded-3xl">
					<img
						src={image}
						alt="project-image"
						className="absolute top-0 left-0 object-cover h-[18rem] w-full rounded-lg"
					/>
				</div>
			</div>

			<TestimonialCard
				testimonyStarClassName={testimonyStarClassName}
				name={name}
				maxStars={rating}
				message={comment}
				position={position}
				rating={rating}
				fill="fill-[#9743FF]"
			/>
		</div>
	);
};

export default StoryItem;
