"use client";
import { BannerImage } from "@/components/atoms";
import ImageBlock from "@/components/atoms/image-block";
import ParallaxContainer from "@/components/atoms/parallax-container";
import SectionHeader from "@/components/atoms/section-header";
import TeamItem from "@/components/atoms/team-item";
import { SocialIcons } from "@/components/molecules";
import SectionContainer from "@/components/molecules/section-container.";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from "react";
import { elementObserver } from "../../../../hooks";
import team from "../../../json/team.json";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "@/api";
import { EmployeeApiResponse, EmployeeData } from "../../../../types";
import PageLoader from "@/components/atoms/page-loader";
import For from "@/components/atoms/for";
import Show from "@/components/atoms/show";
gsap.registerPlugin(ScrollTrigger);

type Props = {};

const About = (props: Props) => {
	const heroRefElement = useRef<HTMLDivElement>(null);
	const aboutMainContainerRefElement = useRef<HTMLDivElement>(null);
	const aboutTeamContainerRefElement = useRef<HTMLDivElement>(null);
	const aboutTeamHeaderRefElement = useRef<HTMLDivElement>(null);
	const [aboutPageHeroHeaderTextState] = useState([
		{ text: "We are a team that believes", hasChild: true },
		{ text: "in the power of technology.", hasChild: false },
	]);
	const [aboutPageHeaderTextState] = useState([
		{ text: "High-quality results and", hasChild: true },
		{ text: "a positive team spirit 🔥", hasChild: false },
	]);

	const { data, isLoading, isError, error } = useQuery<EmployeeApiResponse>({
		queryKey: ["employee"],
		queryFn: () =>
			fetchData<EmployeeApiResponse>(`/employees?populate=*&sort=id:asc`),
	});

	useGSAP(() => {
		gsap.fromTo(
			".about-bg-image",
			{ width: "50%", opacity: 0 },
			{
				scrollTrigger: {
					trigger: ".service-container",
					start: "top 80%",
					end: "31% center",
					scrub: true,
				},
				opacity: 1,
				width: "100%",
				duration: 2.5,
				ease: "sine.out",
			},
		);
	}, [isLoading]);

	useGSAP(
		() => {
			elementObserver(heroRefElement.current, (entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".hero-social-media-icons",
						{ opacity: 0, yPercent: 100 },
						{
							opacity: 1,
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							stagger: 0.2,
						},
					);
					gsap.fromTo(
						".about-hero-text",
						{ opacity: 0, yPercent: 100 },
						{
							opacity: 1,
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
						},
					);
					gsap.fromTo(
						".about-header-text-character",
						{ yPercent: 150, opacity: 0.3 },
						{
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							opacity: 1,
							stagger: 0.1,
						},
					);
					observer.unobserve(entry.target);
				}
			});
		},
		{ scope: heroRefElement, dependencies: [isLoading] },
	);

	useGSAP(
		() => {
			elementObserver(
				aboutMainContainerRefElement.current,
				(entry, observer) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							".about-main-text-character",
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
							".about-main-text",
							{ opacity: 0, yPercent: 100 },
							{
								opacity: 1,
								yPercent: 0,
								duration: 1,
								ease: "sine.out",
								stagger: 0.1,
							},
						);
						gsap.fromTo(
							".about-image-one",
							{ rotate: 0 },
							{
								rotate: "10deg",
								duration: 1,
								ease: "sine.out",
								stagger: 0.1,
							},
						);
						gsap.fromTo(
							".about-image-two",
							{ rotate: 0 },
							{
								rotate: "19deg ",
								duration: 1,
								ease: "sine.out",
								stagger: 0.1,
							},
						);
						gsap.fromTo(
							".about-image-three",
							{ rotate: 0 },
							{
								rotate: "20deg ",
								duration: 1,
								ease: "sine.out",
								stagger: 0.1,
							},
						);
						observer.unobserve(entry.target);
					}
				},
			);
		},
		{ scope: aboutMainContainerRefElement, dependencies: [isLoading] },
	);

	useGSAP(() => {
		elementObserver(
			aboutTeamHeaderRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".about-team-header-text-character",
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
						".about-main-header",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					observer.unobserve(entry.target);
				}
			},
		);
	}, [isLoading]);

	useGSAP(() => {
		elementObserver(
			aboutTeamContainerRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".team-grid-display",
						{ yPercent: 150, opacity: 0.3, scale: 0.4 },
						{
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							opacity: 1,
							scale: 1,
							stagger: 0.2,
						},
					);
					observer.unobserve(entry.target);
				}
			},
		);
	}, [data]);

	const getImageUrl = (child: EmployeeData) => {
		const { attributes } = child;

		// If image data exists, use the first image URL
		if (attributes?.image?.data) {
			return attributes.image.data.attributes.url;
		}

		// If the employee's gender is male, use a male placeholder image
		if (
			attributes?.employee_gender?.data?.attributes?.name.toLowerCase() ===
			"male"
		) {
			return "/images/placeholder.jpg";
		}

		// Otherwise, use a female placeholder image
		return "/images/female-placeholder.png";
	};

	return (
		<SectionContainer containerClassName="!pt-16 pb-20 md:!pt-20">
			{isLoading && (
				<PageLoader className="w-full flex flex-row items-center justify-center py-32" />
			)}
			{data && (
				<>
					<div
						ref={heroRefElement}
						className="flex-col justify-center items-start gap-6 flex pb-20 md:pb-24">
						<div className={` py-4 w-full`}>
							<For each={aboutPageHeroHeaderTextState}>
								{({ text, hasChild }, index) => (
									<ParallaxContainer
										key={index}
										text={text}
										className="about-header-text-character opacity-0"
										parallaxContainerClassName="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]"
										child={
											<Show when={hasChild}>
												<br className="hidden md:block" />
											</Show>
										}
									/>
								)}
							</For>
						</div>

						<div className="opacity-0 about-hero-text w-full text-base leading-[2.1875rem]">
							<p>
								Founded with a vision to revolutionize the world
								of software development, we emerged as a{" "}
								<br className="hidden md:block" /> beacon of
								innovation in the tech industry. Our mission has
								been clear from the start to deliver{" "}
								<br className="hidden md:block" /> exceptional,
								customized software solutions that propel
								businesses into the future.
							</p>
						</div>

						<SocialIcons />
					</div>

					<div className="mt-16">
						<BannerImage
							className="about-bg-image"
							src={`/images/about-bg.png`}
						/>
					</div>

					<div
						ref={aboutMainContainerRefElement}
						className="mt-20 md:mt-32 flex flex-col lg:flex-row lg:justify-between gap-y-32 items-center ">
						<div className="w-full lg:w-[53%] flex-col justify-center items-start gap-9 flex">
							<div className="text-neutral-900 font-bold leading-[3rem] md:leading-[3.5rem] text-3xl md:text-[2.60rem]">
								<ParallaxContainer
									text="The Architects of Innovation."
									className="about-main-text-character opacity-0"
									child={<></>}
								/>
							</div>
							<div className="about-main-text opacity-0 text-neutral-900 text-base leading-[2.5rem]">
								Founded with a vision to revolutionize the world
								of software development, The DevMechanics
								emerged as a beacon of innovation in the tech
								industry.{" "}
							</div>
							<div className="about-main-text opacity-0 text-neutral-900  text-base leading-[2.5rem]">
								Our mission has been clear from the start: to
								deliver exceptional, customized software
								solutions that propel businesses into the
								future. We are a team that believes in the power
								of technology to transform, simplify, and
								enhance both business processes and everyday
								life.
							</div>
						</div>

						<div className=" flex-col justify-center items-center flex relative">
							<div className="relative">
								<ImageBlock
									containerClassName="!z-30"
									subContainerClassName="about-image-one !origin-center block overflow-hidden relative !h-[23rem] ls:!h-[25rem] !w-[19rem] sm:!w-[22rem] ls:!w-[25rem]"
									className="!absolute !top-0 !left-0 ls:!-left-7 "
									src="/images/abt.jpg"
									alt="project-image"
								/>
								<div className="about-image-two z-20 h-[15rem] w-[16.5rem] sm:!w-[19rem] ls:!w-[19rem] absolute sm:rotate-[18deg] -top-3 right-1 sm:-top-2.5 sm:right-0.5 ls:-top-4 ls:right-9 origin-center bg-[#FEDEFF]" />

								<div className="about-image-three h-[15rem] w-[17.5rem] sm:!w-[20rem] ls:!w-[21rem] -z-0 absolute rotate-[20deg] sm:rotate-[20deg] -top-10 right-1 sm:-top-10 sm:right-0.5 ls:-top-11 ls:right-9 origin-center bg-[#FCFAFF]" />
							</div>
						</div>
					</div>

					<div className="mt-28 flex flex-col gap-y-16">
						<SectionHeader
							refElement={aboutTeamHeaderRefElement}
							className="w-full "
							headerText="Our Team"
							headerClassName="about-main-header opacity-0"
							subHeaderText={
								<For each={aboutPageHeaderTextState}>
									{({ text, hasChild }, index) => (
										<ParallaxContainer
											key={index}
											parallaxContainerClassName="text-neutral-900 font-bold text-4xl md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
											text={text}
											className="about-team-header-text-character opacity-0"
											child={
												<Show when={hasChild}>
													<br className="hidden md:block" />
												</Show>
											}
										/>
									)}
								</For>
							}
						/>
						{isLoading && (
							<PageLoader className="w-full flex flex-row items-center justify-center py-32" />
						)}
						{data && data?.data.length > 0 && (
							<div
								ref={aboutTeamContainerRefElement}
								className="grid grid-cols-1 sg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
								{data?.data?.map((child, index) => (
									<TeamItem
										className="team-grid-display opacity-0"
										key={index}
										image={getImageUrl(child)}
										linkedin={child?.attributes?.linkdin}
										name={child?.attributes?.full_name}
										position={child?.attributes?.job_title}
									/>
								))}
							</div>
						)}
					</div>
				</>
			)}
		</SectionContainer>
	);
};

export default About;
