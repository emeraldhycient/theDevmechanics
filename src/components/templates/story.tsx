"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { elementObserver } from "../../../hooks";
import "../../app/styles/globals.scss";
import story from "../../json/story.json";
import ParallaxContainer from "../atoms/parallax-container";
import SectionHeader from "../atoms/section-header";
import SliderButton from "../atoms/slider-button";
import StoryItem from "../atoms/story-item";
import SectionContainer from "../molecules/section-container.";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/api";
import { TestimonialApiResponse } from "../../../types";
import PageLoader from "../atoms/page-loader";
import For from "../atoms/for";
import Show from "../atoms/show";

type Props = {};

const Story = (props: Props) => {
	const storyHeaderRefElement = useRef<HTMLDivElement>(null);
	const storyContainerRefElement = useRef<HTMLDivElement>(null);
	const [homePageStoryHeaderTextState] = useState([
		{ text: "Clients tell their stories of", hasChild: true },
		{ text: "success with DevMechanics.", hasChild: false },
	]);

	const { data, isLoading, isError, error } =
		useQuery<TestimonialApiResponse>({
			queryKey: ["client-comment"],
			queryFn: () =>
				fetchData<TestimonialApiResponse>(
					`/client-comments?populate=*`,
				),
		});

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
					},
				);
				gsap.fromTo(
					".story-main-header",
					{ opacity: 0, yPercent: 70 },
					{ opacity: 1, yPercent: 0, duration: 1 },
				);
				observer.unobserve(entry.target);
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
				observer.unobserve(entry.target);
			}
		});
	}, [data]);

	return (
		<SectionContainer
			containerClassName="pt-[90rem] pb-20 md:!pt-[52rem]"
			className="flex flex-col !gap-y-14 ">
			<SectionHeader
				refElement={storyHeaderRefElement}
				headerText="Client Success Stories"
				subHeaderText={
					<For each={homePageStoryHeaderTextState}>
						{({ hasChild, text }, index) => (
							<ParallaxContainer
								key={index}
								text={text}
								className="story-header-text-character opacity-0"
								parallaxContainerClassName="text-neutral-900 font-bold text-4xl md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
								child={
									<Show when={hasChild}>
										<br className="hidden md:block" />
									</Show>
								}
							/>
						)}
					</For>
				}
				headerClassName="story-main-header opacity-0"
				subHeaderClassName=""
			/>
			{isLoading && (
				<PageLoader className="w-full flex flex-row items-center justify-center py-36" />
			)}
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
					{data?.data?.map((story, index) => (
						<SwiperSlide key={index}>
							<StoryItem
								testimonyStarClassName="opacity-0 scale-0 testimony-star"
								className="story opacity-0"
								index={index}
								comment={story?.attributes?.comment}
								company={story?.attributes?.company}
								name={story?.attributes?.name}
								rating={story?.attributes?.rating}
								role={story?.attributes?.role}
								image={`/images/placeholder.jpg`}
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
