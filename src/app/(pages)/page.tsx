"use client";
import ParallaxContainer from "@/components/atoms/parallax-container";
import { HeroSection, SocialIcons } from "@/components/molecules";
import { Services } from "@/components/templates";
import Project from "@/components/templates/project";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { elementObserver } from "../../../hooks";
import Story from "../../components/templates/story";

export default function Home() {
	const heroRefElement = useRef<HTMLDivElement>(null);
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);

	useGSAP(
		() => {
			elementObserver(heroRefElement.current, (entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".hero-header-text",
						{ opacity: 0, yPercent: 70 },
						{ opacity: 1, yPercent: 0, duration: 1 },
					);
					gsap.fromTo(
						".hero-main-text-character",
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
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="We / build / custom / software / to"
							className="hero-main-text-character opacity-0"
							child={
								<>
									<br className="hidden md:block" />
								</>
							}
						/>
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="meet / your / unique / needs, / driving"
							className="hero-main-text-character opacity-0"
							child={
								<>
									<br className="hidden md:block" />
								</>
							}
						/>
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="Efficiency / & /"
							className="hero-main-text-character opacity-0"
							child={
								<>
									<span
										className={`hero-main-text-character opacity-0 text-[#9743FF]`}>
										Organization
									</span>
									.
								</>
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
