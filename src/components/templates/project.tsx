import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import ImageBlock from "../atoms/image-block";
import ProjectItem from "../atoms/project-item";
import SectionHeader from "../atoms/section-header";
import SectionContainer from "../molecules/section-container.";

type Props = {};

const Project = (props: Props) => {
	return (
		<SectionContainer containerClassName="!relative !min-h-fit !pt-10 md:!pt-14">
			<SectionHeader
				headerText="View Our Projects"
				subHeaderText={
					<>
						A testament to our versatility &{" "}
						<br className="hidden md:block" /> commitment to
						excellence 🔥
					</>
				}
				subHeaderClassName=""
			/>

			<div className="mt-16 h-fit relative">
				<div className="z-[7] absolute w-full h-28 rounded-t-[3.75rem] bg-[#F3FFFF] before:absolute before:inset-0 before:content-['']" />
				<div className="z-[8] absolute w-full top-[3rem] rounded-t-[3.75rem] h-28 bg-[#FCFAFF] before:absolute before:inset-[50px] before:content-['']" />
				<div className="z-[9] absolute w-full top-[7rem] rounded-t-[3.75rem] h-28 bg-[#FFF8F8] before:absolute before:inset-[100px] before:content-['']" />

				<ProjectItem
					imageSrc={"/images/preview.png"}
					projectDescription={`Vision Pay is an innovative agency banking app designed to make easy and secure banking transactions. Our development focused on user-centric design and reliable functionality.`}
					projectName={"Vision Pay"}
					projectMotto={"Empowering Agency Banking"}
					projectServices={
						"UI/UX Design, Front & Back End Development"
					}
					containerClassName={
						"!top-[6rem] !z-[9999] !absolute !w-full !rounded-[3.75rem] py-9 md:py-10 mt-20 md:flex-row bg-[#FBF3EF] !px-3 md:!px-12"
					}
					readCaseStudyLink={"/"}
					viewProjectLink={"/"}
				/>
			</div>
		</SectionContainer>
	);
};

export default Project;
