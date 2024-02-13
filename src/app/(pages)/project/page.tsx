"use client";
import ParallaxContainer from "@/components/atoms/parallax-container";
import ProjectItem from "@/components/atoms/project-item";
import SectionContainer from "@/components/molecules/section-container.";
import React, { useRef } from "react";
import project from "../../../json/project.json";
import { elementObserver } from "../../../../hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

type Props = {};

const Project = (props: Props) => {
	const heroRefElement = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			elementObserver(heroRefElement.current, (entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".project-hero-text",
						{ opacity: 0, yPercent: 100 },
						{
							opacity: 1,
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							onComplete: () => observer.unobserve(entry.target),
						},
					);
					gsap.fromTo(
						".project-header-text-character",
						{ yPercent: 150, opacity: 0.3 },
						{
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							opacity: 1,
							stagger: 0.1,
						},
					);
				}
			});
		},
		{ scope: heroRefElement },
	);
	return (
		<SectionContainer containerClassName="!pt-16 pb-20 md:!pt-20">
			<div
				ref={heroRefElement}
				className="flex-col justify-center items-start gap-6 flex pb-20 md:pb-24">
				<div
					className={`text-4xl md:text-5xl lg:text-6xl font-semibold py-4 w-full leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]`}>
					<ParallaxContainer
						text="Develop / user-friendly / interfaces"
						className="project-header-text-character"
						child={<br className="hidden md:block" />}
					/>
					<ParallaxContainer
						text="that / make / a / positive / impact."
						className="project-header-text-character"
						child={<></>}
					/>
				</div>
				<div className="project-hero-text opacity-0 w-full text-base leading-[2.1875rem]">
					<p>
						Founded with a vision to revolutionize the world of
						software development, we emerged as a{" "}
						<br className="hidden md:block" /> beacon of innovation
						in the tech industry. Our mission has been clear from
						the start to deliver <br className="hidden md:block" />{" "}
						exceptional, customized software solutions that propel
						businesses into the future.
					</p>
				</div>
			</div>

			<div className="flex flex-col gap-y-28 mt-20">
				{project.map((project, index) => (
					<ProjectItem
						key={index}
						imageSrc={"/images/preview.png"}
						projectDescription={`Vision Pay is an innovative agency banking app designed to make easy and secure banking transactions. Our development focused on user-centric design and reliable functionality.`}
						projectName={project.title}
						projectMotto={project.subtitle}
						projectServices={project.skills}
						containerClassName={""}
						readCaseStudyLink={"/"}
						viewProjectLink={"/"}
						isEven={index % 2}
					/>
				))}
			</div>
		</SectionContainer>
	);
};

export default Project;
