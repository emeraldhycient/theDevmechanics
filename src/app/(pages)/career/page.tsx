"use client";
import JobOpeningItem from "@/components/atoms/job-opening-item";
import SectionHeader from "@/components/atoms/section-header";
import SliderButton from "@/components/atoms/slider-button";
import TestimonialCard from "@/components/atoms/testimonial-card";
import HeroContainer from "@/components/molecules/hero-container";
import SectionContainer from "@/components/molecules/section-container.";
import Link from "next/link";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import ArrowIcon from "../../../../public/icons/arrow-icon";
import jobOpenings from "../../../json/jobOpenings.json";
import story from "../../../json/story.json";
import InfoCircleIcon from "../../../../public/images/info-circle-icon";

type Props = {};

const Career = (props: Props) => {
	return (
		<SectionContainer containerClassName="pt-16 md:pt-24">
			<HeroContainer
				title="Grow With Us"
				description="Are you ready to contribute your unique touch of magic? We
					are continually seeking exceptionally talented individuals
					to enrich our dynamic team! Explore our current job openings
					below."
				descriptionClassName="md:!w-[38rem] lg:!w-[38rem]"
				titleClassName=""
				firstLink="/"
				firstLinkText="Explore Jobs"
				secondLinkText="Get a Quote"
				secondLink="/"
				containerClassName="!mb-32"
			/>

			<div className="flex flex-col gap-y-20 mt-32">
				<SectionHeader
					headerText="Employees Testimonials"
					subHeaderText={
						<>
							<p>
								Employees tell their stories of{" "}
								<br className="hidden md:block" /> working with
								DevMechanics.
							</p>
						</>
					}
					subHeaderClassName=""
				/>
				<div className="relative group">
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
						{story.map((story, index) => (
							<SwiperSlide key={index}>
								<TestimonialCard
									name="Dominic Praise"
									maxStars={5}
									message="The DevMechanics didn&lsquo;t just provide a service;
						they delivered a transformation to our business process.
						Their bespoke software solution has been a game-changer
						in how we operate and serve our customers."
									position="CEO at Frameio Stores"
									rating={3}
									fill={`fill-[#FF9E2C]`}
									containerClassName="p-5 rounded-xl md:max-w-[90%] bg-[#FCFAFF]"
								/>
							</SwiperSlide>
						))}
						<SliderButton />
					</Swiper>
				</div>
			</div>

			<div className="flex flex-col gap-y-14 mt-36">
				<SectionHeader
					headerText="Work with us"
					subHeaderText="Job Openings"
					subHeaderClassName="md:max-w-full"
				/>
				<div className="flex flex-col gap-y-16">
					{jobOpenings?.length !== 0 || jobOpenings.length > 0 ? (
						<>
							{jobOpenings.map((job, index) => (
								<JobOpeningItem key={index} {...job} />
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
