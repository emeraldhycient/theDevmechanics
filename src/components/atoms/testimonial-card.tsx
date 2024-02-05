import React from "react";
import StarIcon from "../../../public/icons/star-icon";

const TestimonialCard = ({
	rating,
	maxStars,
	name,
	position,
	message,
	containerClassName,
}: {
	rating: number;
	maxStars: number;
	name: string;
	position: string;
	message: string;
	containerClassName?: string;
}) => {
	return (
		<div
			className={`w-full flex flex-col justify-start items-start gap-5 ${containerClassName}`}>
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
				<div className="text-neutral-900 text-base font-normal leading-[30px]">
					“{message}”
				</div>
			</div>
			<div>
				<span className="text-neutral-900 text-base font-semibold  leading-7">
					{name},{" "}
				</span>
				<span className="text-neutral-900 text-sm font-medium  leading-7">
					{position}
				</span>
			</div>
		</div>
	);
};

export default TestimonialCard;
