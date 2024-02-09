"use client";
import ParallaxCharacter from "@/components/atoms/parallax-character";
import ParallaxContainer from "@/components/atoms/parallax-container";
import { HeroSection, SocialIcons } from "@/components/molecules";
import { Services } from "@/components/templates";
import Project from "@/components/templates/project";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { elementObserver } from "../../../hooks";
import Story from "../../components/templates/story";

export default function Home() {
	const heroRefElement = useRef<HTMLDivElement>(null);
	const parallaxCharacterElement = useRef<HTMLDivElement[]>([]);

	const animateHeroHeaderText = () => {
		gsap.fromTo(
			".hero-header-text",
			{ opacity: 0, yPercent: 70 },
			{ opacity: 1, yPercent: 0, duration: 1 },
		);
	};

	const animateHeroMainText = () => {
		gsap.fromTo(
			".hero-main-text-character",
			{ yPercent: 150, opacity: 0.3 },
			{
				yPercent: 0,
				duration: 1.5,
				ease: "sine.out",
				opacity: 1,
				stagger: 0.2,
			},
		);
	};

	useEffect(() => {
		elementObserver(heroRefElement.current, (entry, observer) => {
			if (entry.isIntersecting) {
				animateHeroHeaderText();
				animateHeroMainText();
			}
			observer.unobserve(entry.target);
		});
	}, []);

	return (
		<>
			<HeroSection
				refElement={heroRefElement}
				title="Software Design Agency"
				description={
					<>
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="We build custom software to"
							child={
								<>
									<br className="hidden md:block" />
								</>
							}
						/>
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="meet your unique needs, driving"
							child={
								<>
									<br className="hidden md:block" />
								</>
							}
						/>
						<ParallaxContainer
							parallaxCharacterElement={parallaxCharacterElement}
							text="Efficiency &"
							child={
								<>
									<span
										className={`hero-main-text-character ml-[0.400rem] text-[#9743FF]`}>
										Organization
									</span>
									.
								</>
							}
						/>
					</>
				}
				child={<SocialIcons />}
			/>
			<Services />
			<Project />
			<Story />
		</>
	);
}
