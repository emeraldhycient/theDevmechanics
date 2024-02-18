"use client";
import ParallaxContainer from "@/components/atoms/parallax-container";
import { HeroSection, SocialIcons } from "@/components/molecules";
import { Services } from "@/components/templates";
import Project from "@/components/templates/project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { elementObserver } from "../../../hooks";
import Story from "../../components/templates/story";
import For from "@/components/atoms/for";
import Show from "@/components/atoms/show";

export default function Home() {
	const heroRefElement = useRef<HTMLDivElement>(null);
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);
	const [homePageHeroMainTextState] = useState([
		{ text: "We build custom software to", hasChild: true },
		{ text: "meet your unique needs, driving", hasChild: false },
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
							duration: 1,
							ease: "sine.out",
							opacity: 1,
							stagger: {
								each: 0.1,
								from: "center",
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
			<HeroSection
				refElement={heroRefElement}
				title="Software Design Agency"
				description={
					<>
						<For each={homePageHeroMainTextState}>
							{({ text, hasChild }, index) => (
								<ParallaxContainer
									key={index}
									parallaxCharacterElement={
										parallaxCharacterElement
									}
									text={text}
									className="hero-main-text-character opacity-0"
									parallaxContainerClassName="text-4xl md:text-5xl lg:text-6xl leading-[3.2rem] md:leading-[4.5rem] lg:leading-[6rem]"
									child={
										<Show when={hasChild}>
											<br className="hidden md:block" />
										</Show>
									}
								/>
							)}
						</For>

						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="Efficiency &"
							className="hero-main-text-character opacity-0"
							parallaxContainerClassName="text-4xl md:text-5xl lg:text-6xl leading-[3.2rem] md:leading-[4.5rem] lg:leading-[6rem]"
							child={
								<span className="hero-main-text-character opacity-0">
									<span className={` text-[#9743FF]`}>
										Organization
									</span>
									<span>.</span>
								</span>
							}
						/>
					</>
				}
				child={<SocialIcons className="opacity-0 " />}
			/>

			<Services />
			<Project />
			<Story />
		</>
	);
}
