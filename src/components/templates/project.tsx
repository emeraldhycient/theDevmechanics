import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import ImageBlock from "../atoms/image-block";
import SectionHeader from "../atoms/section-header";
import SectionContainer from "../molecules/section-container.";
import ProjectItem from "../atoms/project-item";

type Props = {};

const Project = (props: Props) => {
	return (
		<SectionContainer>
			<SectionHeader
				headerText="View Our Projects"
				subHeaderText="A testament to our versatility & commitment to
							excellence 🔥"
				subHeaderClassName="md:w-[40rem] lg:w-[70%]"
			/>

			<ProjectItem
				imageSrc={"/images/preview.png"}
				projectDescription={`Vision Pay is an innovative agency banking app designed to make easy and secure banking transactions. Our development focused on user-centric design and reliable functionality.`}
				projectName={"Vision Pay"}
				projectMotto={"Empowering Agency Banking"}
				projectServices={"UI/UX Design, Front & Back End Development"}
				containerClassName={
					"py-9 md:py-7 mt-20 md:flex-row bg-gradient-to-r from-neutral-50 to-neutral-100"
				}
				readCaseStudyLink={"/"}
				viewProjectLink={"/"}
			/>
		</SectionContainer>
	);
};

export default Project;
