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
					className={`text-3xl md:text-4xl lg:text-5xl font-semibold py-4 w-full md:w-[36rem] ls:w-[37rem] lg:w-[50rem] leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]`}>
					<p>
						Develop user-friendly interfaces{" "}
						<br className="hidden md:block" /> that make a positive
						impact.
					</p>
				</div>
				<div className="leading-[1.7rem] w-full md:max-w-[80%] lg:w-[45rem]">
					<p>
						Founded with a vision to revolutionize the world of
						software development, we emerged as a beacon of
						innovation in the tech industry. Our mission has been
						clear from the start to deliver exceptional, customized
						software solutions that propel businesses into the
						future.
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
