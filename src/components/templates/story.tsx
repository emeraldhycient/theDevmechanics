"use client";
import React, { useEffect, useRef, useState } from "react";
import SwiperCore from "swiper";
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderArrowIcon from "../../../public/icons/slider-arrow-icon";
import "../../app/globals.css";
import story from "../../json/story.json";
import SectionHeader from "../atoms/section-header";
import StoryItem from "../atoms/story-item";
import SectionContainer from "../molecules/section-container.";
import Slider from "../molecules/slider";
import SliderList from "../molecules/slider-list";

register();

type Props = {};

const Story = (props: Props) => {
	const sliderElementRef = useRef<HTMLDivElement>(null);

	const [currentIndex, setCurrentIndex] = useState<number>(0);

	// const handleNextButtonClick = () => {
	// 	if (sliderElementRef.current) {
	// 		sliderElementRef.current.next();
	// 		setCurrentIndex((prevIndex: any) => prevIndex + 1);
	// 	}
	// };

	// const handlePrevButtonClick = () => {
	// 	if (sliderElementRef.current) {
	// 		sliderElementRef.current.prev();
	// 		setCurrentIndex((prevIndex: any) => prevIndex - 1);
	// 	}
	// };
	const isLastSlide = currentIndex === story.length - 1;
	const isFirstSlide = currentIndex === 0;

	return (
		<SectionContainer className="flex flex-col !gap-y-14">
			<SectionHeader
				headerText="Client Success Stories"
				subHeaderText="Clients tell their stories of success with DevMechanics."
				subHeaderClassName="lg:!max-w-[70%]"
			/>
			<div className="relative group">
				{/* <button
					onClick={handlePrevButtonClick}
					className="flex flex-row items-center justify-center rounded-full h-12 w-12 absolute border top-1/2 -left-6 -translate-y-1/2 bg-gray-400 z-30 ease-out duration-500 invisible lg:group-hover:visible group-hover:ease-linear group-hover:duration-500"
				>
					<SliderArrowIcon className="rotate-180" />
				</button> */}
				<Slider
					sliderElementRef={sliderElementRef}
					contentLength={story.length}
					renderCard={(index: number) => <StoryItem index={index} />}
					renderContainer={SliderList}
					loop={false}
					onReset={() => setCurrentIndex(0)}
					cardSize={880}
				/>
				{/* <button
					onClick={handleNextButtonClick}
					className="flex flex-row items-center justify-center rounded-full h-12 w-12 absolute border top-1/2 -right-6 -translate-y-1/2 bg-gray-400 ease-out duration-500 invisible lg:group-hover:visible group-hover:ease-linear group-hover:duration-500"
				>
					<SliderArrowIcon />
				</button> */}
			</div>
		</SectionContainer>
	);
};

export default Story;
