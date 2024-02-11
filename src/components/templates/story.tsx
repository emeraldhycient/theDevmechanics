"use client";
import React, { useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../app/styles/globals.scss";
import story from "../../json/story.json";
import SectionHeader from "../atoms/section-header";
import StoryItem from "../atoms/story-item";
import SectionContainer from "../molecules/section-container.";
import SliderButton from "../atoms/slider-button";
import { useGSAP } from "@gsap/react";
import { elementObserver } from "../../../hooks";
import ParallaxContainer from "../atoms/parallax-container";
import gsap from "gsap";

type Props = {};

const Story = (props: Props) => {
	const storyHeaderRefElement = useRef<HTMLDivElement>(null);
	const storyContainerRefElement = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		elementObserver(storyHeaderRefElement.current, (entry, observer) => {
			if (entry.isIntersecting) {
				gsap.fromTo(
					".story-header-text-character",
					{ yPercent: 150, opacity: 0.3 },
					{
						yPercent: 0,
						duration: 1,
						ease: "sine.out",
						opacity: 1,
						stagger: 0.1,
						onComplete: () => observer.unobserve(entry.target),
					},
				);
				gsap.fromTo(
					".story-main-header",
					{ opacity: 0, yPercent: 70 },
					{ opacity: 1, yPercent: 0, duration: 1 },
				);
			}
		});
	}, []);

	useGSAP(() => {
		elementObserver(storyContainerRefElement.current, (entry, observer) => {
			if (entry.isIntersecting) {
				gsap.fromTo(
					".story",
					{ xPercent: 150, opacity: 0.3 },
					{
						xPercent: 0,
						duration: 1,
						ease: "sine.out",
						opacity: 1,
						stagger: 0.1,
						onComplete: () => {
							gsap.fromTo(
								".testimony-star",
								{ opacity: 0.3, scale: 0 },
								{
									duration: 1.2,
									scale: 1,
									ease: "sine.out",
									opacity: 1,
									stagger: 0.2,
								},
							);
							observer.unobserve(entry.target);
						},
					},
				);
			}
		});
	}, []);

	return (
		<SectionContainer
			containerClassName="!pt-0 mt-[84rem] md:!mt-[52rem]"
			className="flex flex-col !gap-y-14">
			<SectionHeader
				refElement={storyHeaderRefElement}
				headerText="Client Success Stories"
				subHeaderText={
					<>
						<ParallaxContainer
							text="Clients / tell / their / stories / of"
							className="story-header-text-character"
							child={
								<>
									<br className="hidden md:block" />
								</>
							}
						/>
						<ParallaxContainer
							text="success / with / DevMechanics."
							className="story-header-text-character"
							child={<></>}
						/>
					</>
				}
				headerClassName="story-main-header"
				subHeaderClassName=""
			/>
			<div ref={storyContainerRefElement} className="relative group">
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
							<StoryItem
								testimonyStarClassName="opacity-0 scale-0 testimony-star"
								className="story opacity-0"
								index={index}
							/>
						</SwiperSlide>
					))}
					<SliderButton />
				</Swiper>
			</div>
		</SectionContainer>
	);
};

export default Story;
