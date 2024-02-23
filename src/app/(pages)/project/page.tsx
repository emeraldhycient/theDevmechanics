"use client";
import ParallaxContainer from "@/components/atoms/parallax-container";
import ProjectItem from "@/components/atoms/project-item";
import SectionContainer from "@/components/molecules/section-container.";
import React, { useRef, useState } from "react";
import project from "../../../json/project.json";
import { elementObserver } from "../../../../hooks";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { fetchData } from "@/api";
import { useQuery } from "@tanstack/react-query";
import PageLoader from "@/components/atoms/page-loader";
import { ProjectApiResponse } from "../../../../types";
import For from "@/components/atoms/for";
import Show from "@/components/atoms/show";

type Props = {};

const Project = (props: Props) => {
	const { data, isLoading, isError, error } = useQuery<ProjectApiResponse>({
		queryKey: ["project"],
		queryFn: () => fetchData<ProjectApiResponse>(`/projects?populate=*`),
	});
	const heroRefElement = useRef<HTMLDivElement>(null);
	const [projectPageHeroHeaderTextState] = useState([
		{ text: "Develop user-friendly interfaces", hasChild: true },
		{ text: "that make a positive impact.", hasChild: false },
	]);

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
					observer.unobserve(entry.target);
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
				<div className={`font-semibold py-4 w-full `}>
					<For each={projectPageHeroHeaderTextState}>
						{({ text, hasChild }, index) => (
							<ParallaxContainer
								key={index}
								text={text}
								className="project-header-text-character opacity-0"
								parallaxContainerClassName="text-4xl md:text-5xl lg:text-6xl leading-[3.5rem] md:leading-[4.5rem] lg:leading-[5.2rem]"
								child={
									<Show when={hasChild}>
										<br className="hidden md:block" />
									</Show>
								}
							/>
						)}
					</For>
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
			{isLoading && (
				<PageLoader className="w-full flex flex-row items-center justify-center py-48" />
			)}
			{data && (
				<div className="flex flex-col gap-y-28 mt-16">
					{data?.data.map((project, index) => (
						<ProjectItem
							key={index}
							imageSrc={`${project?.attributes?.image?.data?.attributes?.url}`}
							projectDescription={
								project?.attributes?.description
							}
							projectName={project.attributes?.title}
							projectMotto={project.attributes?.motto}
							projectServices={project?.attributes?.type}
							containerClassName={""}
							// readCaseStudyLink={"/"}
							viewProjectLink={project?.attributes?.link}
							isEven={index % 2}
						/>
					))}
				</div>
			)}
		</SectionContainer>
	);
};

export default Project;
