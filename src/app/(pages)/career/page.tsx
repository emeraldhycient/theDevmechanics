import JobOpeningItem from "@/components/atoms/job-opening-item";
import SectionHeader from "@/components/atoms/section-header";
import SectionContainer from "@/components/molecules/section-container.";
import React from "react";
import jobOpenings from "../../../json/jobOpenings.json";
import Link from "next/link";
import ArrowIcon from "../../../../public/icons/arrow-icon";

type Props = {};

const Career = (props: Props) => {
	return (
		<SectionContainer>
			<div>
				<div className="flex flex-col justify-center items-center gap-6 ">
					<div className="text-center text-neutral-900 text-5xl font-semibold leading-[84px]">
						Grow With Us
					</div>
					<div className="text-center text-neutral-900 font-normal leading-[35px] md:w-[52%]">
						Are you ready to contribute your unique touch of magic?
						We are continually seeking exceptionally talented
						individuals to enrich our dynamic team! Explore our
						current job openings below.{" "}
					</div>
					<div className="mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center gap-x-3 gap-y-5">
						<Link
							href=""
							id=""
							className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
						hover:text-[#141515] hover:bg-white hover:border-white ease-linear duration-500"
						>
							<span>Explore Jobs</span>{" "}
							<span>
								<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
							</span>
						</Link>
						<Link
							href=""
							id=""
							className="text-sm text-primary-blue no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-[#FBF3EF] hover:text-[#9743FF] hover:bg-white hover:border-primary-white ease-linear duration-500"
						>
							Learn More
						</Link>
					</div>
				</div>
			</div>
			<div>
				<SectionHeader
					headerText="Employees Testimonials"
					subHeaderText="Employees tell their stories of working with DevMechanics."
					subHeaderClassName="md:max-w-[60%]"
				/>
				<div></div>
			</div>
			<div>
				<SectionHeader
					headerText="Work with us"
					subHeaderText="Job Openings"
					subHeaderClassName="md:max-w-full"
				/>
				<div className="mt-20">
					{jobOpenings.map((job, index) => (
						<JobOpeningItem key={index} {...job} />
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default Career;
