"use client";
import JobOpeningItem from "@/components/atoms/job-opening-item";
import ParallaxContainer from "@/components/atoms/parallax-container";
import SectionHeader from "@/components/atoms/section-header";
import SliderButton from "@/components/atoms/slider-button";
import TestimonialCard from "@/components/atoms/testimonial-card";
import HeroContainer from "@/components/molecules/hero-container";
import SectionContainer from "@/components/molecules/section-container.";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowIcon from "../../../../public/icons/arrow-icon";
import InfoCircleIcon from "../../../../public/images/info-circle-icon";
import jobOpenings from "../../../json/jobOpenings.json";
import story from "../../../json/story.json";
import { useGSAP } from "@gsap/react";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/api";
import { EmployeeCommentApiResponse } from "../../../../types";
import PageLoader from "@/components/atoms/page-loader";
import For from "@/components/atoms/for";
import Show from "@/components/atoms/show";

type Props = {};

const Career = (props: Props) => {
	const careerHeroHeaderRefElement = useRef<HTMLDivElement>(null);
	const careerHeaderRefElement = useRef<HTMLDivElement>(null);
	const careerJobOpeningHeaderRefElement = useRef<HTMLDivElement>(null);
	const careerContainerRefElement = useRef<HTMLDivElement>(null);
	const [careerPageHeaderTextState] = useState([
		{ text: "Employees tell their stories of", hasChild: true },
		{ text: "working with DevMechanics.", hasChild: false },
	]);

	const { data, isLoading, isError, error } =
		useQuery<EmployeeCommentApiResponse>({
			queryKey: ["employee-comment"],
			queryFn: () =>
				fetchData<EmployeeCommentApiResponse>(
					`/employee-comments?populate=*`,
				),
		});

	useGSAP(() => {
		elementObserver(
			careerHeroHeaderRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".career-hero-header-text-character",
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
						".career-hero-text",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					gsap.fromTo(
						".career-hero-link-container",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					observer.unobserve(entry.target);
				}
			},
		);
	}, []);

	useEffect(() => {
		elementObserver(careerHeaderRefElement.current, (entry, observer) => {
			if (entry.isIntersecting) {
				gsap.fromTo(
					".career-main-header",
					{ opacity: 0, yPercent: 70 },
					{ opacity: 1, yPercent: 0, duration: 1 },
				);
				gsap.fromTo(
					".career-header-text-character",
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
			}
		});
	}, []);

	useGSAP(() => {
		elementObserver(
			careerContainerRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".testimony",
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
							},
						},
					);
					observer.unobserve(entry.target);
				}
			},
		);
	}, []);

	useGSAP(() => {
		elementObserver(
			careerJobOpeningHeaderRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".career-job-opening-text-character",
						{ yPercent: 150, opacity: 0.3 },
						{
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							opacity: 1,
							stagger: 0.1,
							onComplete: () => {
								observer.unobserve(entry.target);
							},
						},
					);
					gsap.fromTo(
						".openings-main-header",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					observer.unobserve(entry.target);
				}
			},
		);
	}, []);

	return (
		<SectionContainer containerClassName="pt-16 pb-20 md:pt-24">
			<HeroContainer
				refElement={careerHeroHeaderRefElement}
				title={
					<div className="flex flex-col items-center justify-center text-center">
						<ParallaxContainer
							text="Grow With Us "
							className="career-hero-header-text-character opacity-0"
							parallaxContainerClassName="justify-center text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-medium leading-[3rem] md:leading-[4rem] lg:leading-[5rem]"
							child={<br className="hidden md:block" />}
						/>
					</div>
				}
				description="Are you ready to contribute your unique touch of magic? We
					are continually seeking exceptionally talented individuals
					to enrich our dynamic team! Explore our current job openings
					below."
				descriptionClassName="md:!w-[38rem] lg:!w-[38rem] opacity-0 career-hero-text"
				titleClassName=""
				firstLink="/"
				firstLinkText="Explore Jobs"
				secondLinkText="Get a Quote"
				secondLink="/"
				containerClassName="!mb-32"
				linkContainerClassName="opacity-0 career-hero-link-container"
			/>

			<div className="flex flex-col gap-y-16 mt-28">
				<SectionHeader
					refElement={careerHeaderRefElement}
					headerText="Employees Testimonials"
					subHeaderText={
						<>
							<For each={careerPageHeaderTextState}>
								{({ text, hasChild }, index) => (
									<ParallaxContainer
										key={index}
										parallaxContainerClassName="text-neutral-900 font-bold text-4xl md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
										text={text}
										className="career-header-text-character opacity-0"
										child={
											<Show when={hasChild}>
												<br className="hidden md:block" />
											</Show>
										}
									/>
								)}
							</For>
						</>
					}
					subHeaderClassName=""
					headerClassName="career-main-header opacity-0"
				/>
				{isLoading && (
					<PageLoader className="w-full flex flex-row items-center justify-center py-36" />
				)}
				{data && (
					<div
						ref={careerContainerRefElement}
						className="relative group">
						<Swiper
							className="w-full flex flex-row items-center "
							breakpoints={{
								320: { spaceBetween: 50 },
								768: { spaceBetween: 5, slidesPerView: 1.4 },
								1136: {
									spaceBetween: 5,
									slidesPerView: 2,
								},
							}}
							spaceBetween={50}>
							{data?.data?.map((comment, index) => (
								<SwiperSlide key={index}>
									<TestimonialCard
										name={
											comment?.attributes?.employee?.data
												?.attributes?.name
										}
										// testimonyStarClassName="testimony-star"
										maxStars={5}
										company={"null"}
										message={comment?.attributes?.comment}
										role={`${comment?.attributes?.employee?.data?.attributes?.role}`}
										rating={comment?.attributes?.rating}
										fill={`fill-[#FF9E2C]`}
										containerClassName="testimony p-5 rounded-xl md:max-w-[90%] bg-[#FCFAFF]"
									/>
								</SwiperSlide>
							))}
							<SliderButton />
						</Swiper>
					</div>
				)}
			</div>

			<div className="flex flex-col gap-y-10 mt-32">
				<SectionHeader
					refElement={careerJobOpeningHeaderRefElement}
					headerText="Work with us"
					subHeaderText={
						<ParallaxContainer
							text="Job Openings"
							parallaxContainerClassName="text-neutral-900 font-bold text-4xl md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
							className="career-job-opening-text-character opacity-0"
							child={<></>}
						/>
					}
					headerClassName="openings-main-header opacity-0"
					subHeaderClassName="md:max-w-full"
				/>
				<div className="flex flex-col gap-y-16">
					{[]?.length !== 0 || [].length > 0 ? (
						<>
							{[].map((job, index) => (
								<JobOpeningItem key={index} />
							))}
						</>
					) : (
						<div className="px-5 md:px-16 py-10 bg-gradient-to-tr from-sky-300 to-cyan-200 rounded-3xl flex flex-col sg:flex-row justify-start items-start gap-6">
							<div className="flex items-center justify-center ">
								<InfoCircleIcon className="w-14 h-14 fill-black" />
							</div>
							<div className="text-neutral-900 text-2xl ls:text-3xl font-semibold leading-[3rem] ls:leading-[3rem]">
								Oops, Sorry! We are not actively recruiting at
								this time, but <br /> we encourage you to check
								back regularly for new opportunities.
							</div>
						</div>
					)}
				</div>
			</div>
		</SectionContainer>
	);
};

export default Career;
