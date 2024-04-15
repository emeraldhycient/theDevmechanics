"use client";
import ServicesList from "@/json/services.json";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { elementObserver } from "../../../hooks";
import { BannerImage } from "../atoms";
import ParallaxContainer from "../atoms/parallax-container";
import SectionHeader from "../atoms/section-header";
import SectionContainer from "../molecules/section-container.";
import For from "../atoms/for";
import Show from "../atoms/show";
gsap.registerPlugin(ScrollTrigger);

const Services = (): React.ReactNode => {
	const serviceRefElement = useRef<HTMLDivElement>(null);
	const serviceHeaderRefElement = useRef<HTMLDivElement>(null);
	const serviceContainerRefElement = useRef<HTMLDivElement>(null);
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);

	const [animated, setAnimated] = useState(false);
	const [homePageServiceHeaderTextState] = useState([
		{
			text: "Software architecture, design and implementation for any industry 🔥",
			hasChild: true,
		},
		// { text: "implementation for any industry 🔥", hasChild: false },
	]);

	useEffect(() => {
		gsap.fromTo(
			".service-bg-image",
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
	}, []);

	useGSAP(
		() => {
			elementObserver(
				serviceHeaderRefElement.current,
				(entry, observer) => {
					if (entry.isIntersecting) {
						gsap.fromTo(
							".service-header-text-character",
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
							".service-main-header",
							{ opacity: 0, yPercent: 70 },
							{ opacity: 1, yPercent: 0, duration: 1 },
						);
						observer.unobserve(entry.target);
					}
				},
			);
		},
		{ scope: serviceHeaderRefElement },
	);

	useGSAP(() => {
		elementObserver(
			serviceContainerRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".services",
						{
							yPercent: 100,
							opacity: 0.3,
						},
						{
							yPercent: 0,
							duration: 1.5,
							ease: "backout(1.7)",
							stagger: 0.2,
							opacity: 1,
						},
					);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.3 },
		);
	}, []);

	return (
		<SectionContainer
			refElement={serviceRefElement}
			containerClassName={`service-container !pt-14`}
			className="">
			<BannerImage
				className="service-bg-image border"
				src={`/images/home-bg.png`}
			/>

			<SectionHeader
				refElement={serviceHeaderRefElement}
				headerText="Solution For Every Factor"
				subHeaderText={
					<>
						{" "}
						<For each={homePageServiceHeaderTextState}>
							{({ text, hasChild }, index) => (
								<ParallaxContainer
									key={index}
									parallaxContainerClassName="flex items-center md:items-start justify-center md:justify-start text-center md:text-start text-neutral-900 font-bold text-[2.30rem] md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
									parallaxCharacterElement={
										parallaxCharacterElement
									}
									text={text}
									className="service-header-text-character opacity-0 "
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
				className="service-header-text-container mt-20 md:mt-20 flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-start"
				headerClassName="service-main-header opacity-0"
				subHeaderClassName="mb-16 w-full md:w-[80%]"
			/>

			<div
				ref={serviceContainerRefElement}
				className={`main-service-container grid grid-cols-1 mx:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-9 gap-y-10`}>
				{ServicesList.map((service, index) => (
					<div
						key={index}
						className={`border-[#eee0ff] services opacity-0 flex flex-col justify-between py-6 px-4 border rounded-[29.245px] w-full md:w-[250px] lg:w-[250px] gap-y-7 md:gap-y-10 hover:shadow-sm`}>
						<div className="">
							<Image
								src={service.icon}
								width={62.39}
								height={62.39}
								className={`w-[62px] h-[62px]`}
								alt=""
							/>

							<div className=" h-[7rem]">
								<p
									className={`font-medium text-[1.25rem] py-3 capitalize`}>
									{service.title}
								</p>
							</div>
						</div>

						<div className=" h-[7rem]">
							<p className={`text-[0.9375rem]`}>
								{service.writeup}
							</p>
						</div>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};

export default Services;
