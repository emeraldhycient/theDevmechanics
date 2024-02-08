import SectionContainer from "@/components/molecules/section-container.";
import React from "react";
import project from "../../../json/project.json";
import ProjectItem from "@/components/atoms/project-item";

type Props = {};

const Project = (props: Props) => {
	return (
		<SectionContainer>
			<div className="flex-col justify-center items-start gap-6 flex pb-20 md:pb-24">
				<div
					className={`text-4xl md:text-5xl lg:text-6xl font-semibold py-4 w-full leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]`}>
					<p>
						Develop user-friendly interfaces{" "}
						<br className="hidden md:block" /> that make a positive
						impact.
					</p>
				</div>
				<div className="w-full text-[1.25rem] leading-[2.1875rem]">
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
