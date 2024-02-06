"use client";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../app/styles/globals.scss";
import story from "../../json/story.json";
import SectionHeader from "../atoms/section-header";
import StoryItem from "../atoms/story-item";
import SectionContainer from "../molecules/section-container.";
import SliderButton from "../atoms/slider-button";

type Props = {};

const Story = (props: Props) => {
	return (
		<SectionContainer className="flex flex-col !gap-y-14">
			<SectionHeader
				headerText="Client Success Stories"
				subHeaderText="Clients tell their stories of success with DevMechanics."
				subHeaderClassName="md:w-[33rem] lg:w-[35rem]"
			/>
			<div className="relative group">
				<Swiper
					className="w-full flex flex-row items-center"
					breakpoints={{
						768: { spaceBetween: 4, slidesPerView: 1.4 },
						1024: {
							spaceBetween: 5,
							slidesPerView: 1,
						},
						1136: {
							spaceBetween: 5,
							slidesPerView: 1.2,
						},
					}}
					spaceBetween={50}>
					{story.map((story, index) => (
						<SwiperSlide key={index}>
							<StoryItem index={index} />
						</SwiperSlide>
					))}
					<SliderButton />
				</Swiper>
			</div>
		</SectionContainer>
	);
};

export default Story;
