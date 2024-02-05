import SectionContainer from "@/components/molecules/section-container.";
import React from "react";
import project from "../../../json/project.json";
import ProjectItem from "@/components/atoms/project-item";

type Props = {};

const Project = (props: Props) => {
	return (
		<SectionContainer>
			<div className="flex-col justify-center items-start gap-8 flex w-full md:max-w-[80%] lg:max-w-[65%]">
				<div className=" text-neutral-900 font-semibold text-3xl md:text-4xl lg:text-5xl leading-[3rem] md:leading-[4rem] lg:leading-[4rem]">
					Develop user-friendly interfaces that make a positive
					impact.
				</div>
				<div className=" text-neutral-900 text-sm font-normal leading-[27px]">
					Founded with a vision to revolutionize the world of software
					development, we emerged as a beacon of innovation in the
					tech industry. Our mission has been clear from the start to
					deliver exceptional, customized software solutions that
					propel businesses into the future.
				</div>
			</div>

			<div className="flex flex-col gap-y-20 mt-32">
				{project.map((project, index) => (
					<ProjectItem key={index} isEven={index % 2} {...project} />
				))}
			</div>
		</SectionContainer>
	);
};

export default Project;
