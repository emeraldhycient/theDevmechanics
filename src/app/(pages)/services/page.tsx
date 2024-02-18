"use client";
import { BannerImage } from "@/components/atoms";
import ParallaxContainer from "@/components/atoms/parallax-container";
import SectionHeader from "@/components/atoms/section-header";
import HeroContainer from "@/components/molecules/hero-container";
import SectionContainer from "@/components/molecules/section-container.";
import { ServicePage } from "@/components/templates";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import For from "@/components/atoms/for";
import Show from "@/components/atoms/show";

gsap.registerPlugin(ScrollTrigger);

const Page = (): React.ReactNode => {
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);
	const serviceHeaderRefElement = useRef<HTMLDivElement>(null);
	const serviceHeroHeaderRefElement = useRef<HTMLDivElement>(null);
	const serviceRefElement = useRef<HTMLDivElement>(null);
	const serviceListContainerRef = useRef<HTMLDivElement>(null);
	const [servicePageHeroHeaderTextState] = useState([
		{ text: "We bring your dreams to", hasChild: true },
		{ text: "life, with optimized processes.", hasChild: false },
	]);
	const [servicePageHeaderTextState] = useState([
		{ text: "Expert Software Architecture, Design,", hasChild: true },
		{ text: "and Implementation Across Industries", hasChild: false },
	]);

	useEffect(() => {
		gsap.fromTo(
			".service-bg-image",
			{ width: "50%", opacity: 0 },
			{
				scrollTrigger: {
					trigger: ".service-bg-image",
					start: "top 90%",
					end: "bottom center",
					scrub: true,
				},
				opacity: 1,
				width: "100%",
				duration: 2.5,
				ease: "sine.out",
			},
		);
	}, []);

	useGSAP(() => {
		elementObserver(
			serviceHeroHeaderRefElement.current,
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".service-hero-header-text-character",
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
						".service-hero-text",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					gsap.fromTo(
						".service-hero-link-container",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					observer.unobserve(entry.target);
				}
			},
		);
	}, []);

	useGSAP(() => {
		elementObserver(serviceHeaderRefElement.current, (entry, observer) => {
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
		});
	}, []);

	useGSAP(
		() => {
			elementObserver(
				serviceListContainerRef.current,
				(entry, observer) => {
					if (entry.isIntersecting) {
						console.log("This should work");
					}
				},
			);
		},
		{ scope: serviceListContainerRef },
	);

	return (
		<SectionContainer
			refElement={serviceRefElement}
			containerClassName="pt-16 pb-20 md:pt-24">
			<HeroContainer
				refElement={serviceHeroHeaderRefElement}
				title={
					<div className="flex flex-col items-center justify-center text-center">
						<For each={servicePageHeroHeaderTextState}>
							{({ text, hasChild }, index) => (
								<ParallaxContainer
									key={index}
									parallaxCharacterElement={
										parallaxCharacterElement
									}
									text={text}
									className="service-hero-header-text-character opacity-0"
									parallaxContainerClassName="justify-center text-neutral-900 text-4xl md:text-5xl lg:text-6xl font-medium leading-[3rem] md:leading-[4rem] lg:leading-[5rem]"
									child={
										<Show when={hasChild}>
											<br className="hidden md:block" />
										</Show>
									}
								/>
							)}
						</For>
					</div>
				}
				description="Explore our creative services and experience expert software
					solutions tailored to any industry. From architecture to
					implementation, we bring innovation to life."
				descriptionClassName="md:!w-[45rem] opacity-0 service-hero-text"
				titleClassName=""
				firstLink="/"
				firstLinkText="Read More"
				secondLinkText="Get a Quote"
				secondLink="/"
				containerClassName="!mb-32"
				icon={<></>}
				linkContainerClassName="opacity-0 service-hero-link-container"
			/>
			<div className="mt-24">
				{" "}
				<BannerImage
					src={`/images/services/banner.svg`}
					className="service-bg-image"
				/>
			</div>
			<div className="mt-24 flex flex-col gap-y-9">
				<SectionHeader
					refElement={serviceHeaderRefElement}
					className="w-full"
					headerText="Crafting Innovative Solutions"
					subHeaderText={
						<>
							<For each={servicePageHeaderTextState}>
								{({ text, hasChild }, index) => (
									<ParallaxContainer
										key={index}
										parallaxCharacterElement={
											parallaxCharacterElement
										}
										parallaxContainerClassName="text-neutral-900 font-bold text-4xl md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
										text={text}
										className="service-header-text-character opacity-0"
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
					headerClassName="service-main-header opacity-0"
				/>

				<div className="pt-10" ref={serviceListContainerRef}>
					<ServicePage />
				</div>
			</div>
		</SectionContainer>
	);
};

export default Page;
