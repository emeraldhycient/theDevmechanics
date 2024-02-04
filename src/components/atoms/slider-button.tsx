import React from "react";
import { useSwiper } from "swiper/react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import TailedArrowIcon from "../../../public/icons/services/tailed-arrow-icon";
import SliderArrowIcon from "../../../public/icons/slider-arrow-icon";

type Props = {};

const SliderButton = (props: Props) => {
	const swiperElement = useSwiper();

	const className = `flex flex-row items-center justify-center rounded-full h-12 w-12 border bg-gray-400 absolute z-50 top-1/2 -translate-y-1/2 ease-out duration-500 invisible lg:group-hover:visible group-hover:ease-linear group-hover:duration-500 cursor-pointer`;

	return (
		<>
			<button
				onClick={() => swiperElement.slidePrev()}
				className={`${className} left-0`}
			>
				<TailedArrowIcon />
			</button>
			<button
				onClick={() => swiperElement.slideNext()}
				className={`${className} right-0`}
			>
				<TailedArrowIcon className="rotate-180" />
			</button>{" "}
		</>
	);
};

export default SliderButton;
