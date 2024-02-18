import { fetchData } from "@/api";
import { useGSAP } from "@gsap/react";
import { useQuery } from "@tanstack/react-query";
import gsap from "gsap";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { elementObserver } from "../../../hooks";
import ArrowIcon from "../../../public/icons/arrow-icon";
import { ProjectApiResponse } from "../../../types";
import For from "../atoms/for";
import ImageBlock from "../atoms/image-block";
import PageLoader from "../atoms/page-loader";
import ParallaxContainer from "../atoms/parallax-container";
import ProjectItem from "../atoms/project-item";
import SectionHeader from "../atoms/section-header";
import SectionContainer from "../molecules/section-container.";
import Show from "../atoms/show";

type Props = {};

const Project = (props: Props) => {
	const projectHeaderRefElement = useRef<HTMLDivElement>(null);
	const projectRefElement = useRef<HTMLDivElement>(null);
	const elementRefs = useRef<any[]>([]);
	const projectElementsRem = ["0rem", "4rem", "8rem", "12rem"];
	const [homePageProjectHeaderTextState] = useState([
		{ text: "A testament to our versatility &", hasChild: true },
		{ text: "commitment to excellence 🔥", hasChild: false },
	]);

	const { data, isLoading, isError, error } = useQuery<ProjectApiResponse>({
		queryKey: ["project"],
		queryFn: () => fetchData<ProjectApiResponse>(`/projects?populate=*`),
	});

	const projectData = data?.data[0];

	useGSAP(() => {
		elementRefs.current.forEach((element, index) => {
			gsap.to(element, {
				scrollTrigger: {
					trigger: ".project-scroll-trigger",
					scrub: true,
					start: "top 80%",
					end: "50% center",
				},
				top: projectElementsRem[index],
				duration: 2.5,
				ease: "sine.out",
			});
		});
	}, []);

	useGSAP(() => {
		elementObserver(projectHeaderRefElement.current, (entry, observer) => {
			if (entry.isIntersecting) {
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
				gsap.fromTo(
					".project-main-header",
					{ opacity: 0, yPercent: 70 },
					{ opacity: 1, yPercent: 0, duration: 1 },
				);
				observer.unobserve(entry.target);
			}
		});
	}, []);

	useGSAP(() => {
		elementObserver(
			elementRefs.current[3],
			(entry, observer) => {
				if (entry.isIntersecting) {
					gsap.fromTo(
						".project-text-container",
						{ yPercent: 150, opacity: 0.3, scale: 0 },
						{
							yPercent: 0,
							duration: 1,
							ease: "sine.out",
							scale: 1,
							opacity: 1,
							stagger: 0.1,
						},
					);
					gsap.fromTo(
						".project-image-container",
						{ yPercent: 150, opacity: 0.3 },
						{
							yPercent: 0,
							duration: 1.2,
							ease: "sine.out",
							opacity: 1,
							stagger: 0.2,
						},
					);
					observer.unobserve(entry.target);
				}
			},
			{ threshold: 0.5 },
		);
	}, []);

	return (
		<SectionContainer containerClassName="!relative !min-h-fit !pt-10 md:!pt-20">
			<SectionHeader
				refElement={projectHeaderRefElement}
				headerText="View Our Projects"
				className=""
				subHeaderText={
					<For each={homePageProjectHeaderTextState}>
						{({ hasChild, text }, index) => (
							<ParallaxContainer
								key={index}
								text={text}
								className="project-header-text-character opacity-0"
								parallaxContainerClassName="text-neutral-900 font-bold text-4xl md:text-5xl leading-[3.5rem] md:leading-[4.5rem]"
								child={
									<Show when={hasChild}>
										<br className="hidden md:block" />
									</Show>
								}
							/>
						)}
					</For>
				}
				subHeaderClassName=""
				headerClassName="project-main-header"
			/>

			<div className="mt-16 h-fit relative">
				<div
					ref={(el) => (elementRefs.current[0] = el)}
					className=" z-[7] absolute w-full h-28 top-0 rounded-t-[3.75rem] bg-[#F3FFFF] before:absolute before:inset-0 before:content-['']"
				/>
				<div
					ref={(el) => (elementRefs.current[1] = el)}
					className=" z-[8] absolute w-full top-0 rounded-t-[3.75rem] h-28 bg-[#FCFAFF] before:absolute before:inset-[50px] before:content-['']"
				/>
				<div
					ref={(el) => (elementRefs.current[2] = el)}
					className=" z-[9] absolute w-full top-0 rounded-t-[3.75rem] h-28 bg-[#FFF8F8] before:absolute before:inset-[100px] before:content-['']"
				/>

				<div
					ref={(el) => {
						elementRefs.current[3] = el;
					}}
					className={
						" project-scroll-trigger  top-0 z-[9999] absolute w-full !rounded-[3.75rem] py-9 md:py-10  md:flex-row bg-[#FBF3EF] px-3 md:px-12"
					}>
					{isLoading && (
						<PageLoader className="w-full flex flex-row items-center justify-center py-36" />
					)}
					{data && (
						<ProjectItem
							imageSrc={`https://the-devmechanics-strapi-api.onrender.com${projectData?.attributes?.image?.data?.attributes?.url}`}
							projectDescription={
								projectData?.attributes?.description
							}
							projectName={projectData?.attributes?.name}
							projectMotto={projectData?.attributes?.solution}
							projectServices={projectData?.attributes?.type}
							// imageContainerClassName="project-image-container"
							// textContainerClassName={`project-text-container `}
							readCaseStudyLink={"/"}
							viewProjectLink={projectData?.attributes?.link}
						/>
					)}
				</div>
			</div>
		</SectionContainer>
	);
};

export default Project;
