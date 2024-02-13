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
import React, { useEffect, useRef } from "react";
import { elementObserver } from "../../../../hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page = (): React.ReactNode => {
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);
	const serviceHeaderRefElement = useRef<HTMLDivElement>(null);
	const serviceHeroHeaderRefElement = useRef<HTMLDivElement>(null);
	const serviceRefElement = useRef<HTMLDivElement>(null);
	const serviceListRefElementContainer = useRef<HTMLDivElement>(null);

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
							onComplete: () => observer.unobserve(entry.target),
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
						onComplete: () => observer.unobserve(entry.target),
					},
				);
				gsap.fromTo(
					".service-main-header",
					{ opacity: 0, yPercent: 70 },
					{ opacity: 1, yPercent: 0, duration: 1 },
				);
			}
		});
	}, []);

	useGSAP(
		() => {
			elementObserver(
				serviceListRefElementContainer.current,
				(entry, observer) => {
					if (entry.isIntersecting) {
						console.log("This should work");
					}
				},
			);
		},
		{ scope: serviceListRefElementContainer },
	);

	return (
		<SectionContainer
			refElement={serviceRefElement}
			containerClassName="pt-16 pb-20 md:pt-24">
			<HeroContainer
				refElement={serviceHeroHeaderRefElement}
				title={
					<div className="flex flex-col items-center justify-center text-center">
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="We / bring / your / dreams / to"
							className="service-hero-header-text-character"
							parallaxContainerClassName="justify-center"
							child={<br className="hidden md:block" />}
						/>
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							parallaxContainerClassName="justify-center"
							text="life, / with / optimized / processes."
							className="service-hero-header-text-character"
							child={<></>}
						/>
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
					className="service-bg-image border"
				/>
			</div>
			<div className="mt-24 flex flex-col gap-y-9">
				<SectionHeader
					refElement={serviceHeaderRefElement}
					className="w-full"
					headerText="Crafting Innovative Solutions"
					subHeaderText={
						<>
							<ParallaxContainer
								parallaxCharacterElement={
									parallaxCharacterElement
								}
								text="Expert / Software / Architecture, / Design,"
								className="service-header-text-character"
								child={
									<>
										<br className="hidden md:block" />
									</>
								}
							/>
							<ParallaxContainer
								parallaxCharacterElement={
									parallaxCharacterElement
								}
								text="and / Implementation / Across / Industries"
								className="service-header-text-character"
								child={<></>}
							/>
						</>
					}
					headerClassName="service-main-header"
				/>
				<div className="" ref={serviceListRefElementContainer}>
					<ServicePage />
				</div>
			</div>
		</SectionContainer>
	);
};

export default Page;
