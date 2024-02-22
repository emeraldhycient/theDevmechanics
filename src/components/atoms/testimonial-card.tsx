import React from "react";
import StarIcon from "../../../public/icons/star-icon";

const TestimonialCard = ({
	rating,
	maxStars,
	name,
	role,
	message,
	company,
	containerClassName,
	icon,
	fill,
	testimonyStarClassName,
}: {
	rating: number;
	maxStars: number;
	name: string;
	role: string;
	message: string;
	company: string;
	containerClassName?: string;
	icon?: React.ReactNode;
	fill?: string;
	testimonyStarClassName?: string;
}) => {
	return (
		<div
			className={`w-full flex flex-col justify-start items-start gap-5 ${containerClassName}`}>
			<div className="justify-start items-center gap-4 flex">
				<div className="justify-start items-center gap-2.5 flex">
					{Array.from({ length: maxStars }).map((_, index) => (
						<span key={index}>
							{icon ? (
								<>icon</>
							) : (
								<StarIcon
									className={`${index < rating ? `${fill}` : "stroke-[#F2E8FF]"} ${testimonyStarClassName}`}
									fill={index < rating ? "" : "transparent"}
									empty={index < rating ? false : true}
								/>
							)}
						</span>
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
					{role} at {company}
				</span>
			</div>
		</div>
	);
};

export default TestimonialCard;
