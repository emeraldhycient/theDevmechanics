"use client";
import For from "@/components/atoms/for";
import ParallaxContainer from "@/components/atoms/parallax-container";
import Show from "@/components/atoms/show";
import { HeroSection, SocialIcons } from "@/components/molecules";
import { Services } from "@/components/templates";
import Project from "@/components/templates/project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { elementObserver } from "../../../hooks";
import Story from "../../components/templates/story";
import StackedCards from "@/components/stack";

export default function Home() {
	const heroRefElement = useRef<HTMLDivElement>(null);
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);
	const [homePageHeroMainTextState] = useState([
		{
			text: "We build custom software to meet your unique needs, driving Efficiency &",
			hasChild: true,
		},
	]);

	useGSAP(
		() => {
			elementObserver(heroRefElement.current, (entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".hero-header-text",
						{ opacity: 0, yPercent: 70 },
						{
							opacity: 1,
							ease: "back.out(1.7)",
							yPercent: 0,
							duration: 1,
						},
					);
					gsap.fromTo(
						".hero-main-text-character",
						{
							yPercent: 150,
							opacity: 0.3,
						},
						{
							yPercent: 0,
							duration: 1.5,
							ease: "back.out(1.7)",
							opacity: 1,
							stagger: {
								each: 0.1,
								from: "start",
							},
						},
					);
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
					observer.unobserve(entry.target);
				}
			});
		},
		{ scope: heroRefElement },
	);

	return (
		<>
			{/* <StackedCards  /> */}
			<HeroSection
				refElement={heroRefElement}
				title="Software Design Agency"
				containerClassName="w-full md:max-w-[85%]"
				sectionContainerClassName="flex flex-col items-center md:items-start justify-center md:justify-start text-center md:text-start"
				description={
					<For each={homePageHeroMainTextState}>
						{({ text, hasChild }, index) => (
							<ParallaxContainer
								key={index}
								parallaxCharacterElement={
									parallaxCharacterElement
								}
								text={text}
								className="hero-main-text-character opacity-0"
								parallaxContainerClassName="flex items-center md:items-start justify-center md:justify-start text-center md:text-start text-[2.30rem] md:text-5xl lg:text-6xl leading-[3.5rem] md:leading-[4.5rem] lg:leading-[6rem]"
								child={
									<ParallaxContainer
										text={"Organization"}
										className="hero-main-text-character opacity-0"
										parallaxContainerClassName="text-4xl text-[#9743FF] md:text-5xl lg:text-6xl leading-[3.2rem] md:leading-[4.5rem] lg:leading-[6rem] gap-x-0"
										child={
											<span className="text-black">
												.
											</span>
										}
									/>
								}
							/>
						)}
					</For>
				}
				child={<SocialIcons className="opacity-0 " />}
			/>

			<Services />
			<Project />
			<Story />
		</>
	);
}
