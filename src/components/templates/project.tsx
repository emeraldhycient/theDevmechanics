import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import ImageBlock from "../atoms/image-block";
import SectionHeader from "../atoms/section-header";
import SectionContainer from "../molecules/section-container.";

type Props = {};

const Project = (props: Props) => {
	return (
		<SectionContainer>
			<SectionHeader
				headerText="View Our Projects"
				subHeaderText="A testament to our versatility & commitment to
							excellence 🔥"
			/>
			<div className="flex flex-col md:flex-row items-center justify-between bg-[#FBF3EF] rounded-2xl px-3 md:px-12 py-9 md:py-7 gap-y-14 mt-20">
				<div className="w-full md:w-[45%] text-center md:text-start flex flex-col items-center md:items-start ">
					<div className="text-sm mb-5">
						<p>Vision Pay</p>
					</div>
					<div className="text-2xl font-semibold text-[#141515]">
						<p>Empowering Agency Banking</p>
					</div>
					<div className="text-sm my-5 text-[#9FA4A6] leading-loose">
						<p>
							Vision Pay is an innovative agency banking app
							designed to make easy and secure banking
							transactions. Our development focused on
							user-centric design and reliable functionality.
						</p>
					</div>
					<div className="text-base text-[#141515]">
						<p>UI/UX Design, Front & Back End Development</p>
					</div>

					<div>
						<div className="mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center ml-auto gap-x-3 gap-y-5">
							<Link
								href=""
								id=""
								className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
						hover:text-[#141515] hover:bg-white hover:border-white ease-linear duration-500"
							>
								<span>View Project</span>{" "}
								<span>
									<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
								</span>
							</Link>
							<Link
								href=""
								id=""
								className="text-sm text-primary-blue no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-[#FBF3EF] hover:text-[#9743FF] hover:bg-white hover:border-primary-white ease-linear duration-500"
							>
								Read Case Study
							</Link>
						</div>
					</div>
				</div>

				<ImageBlock
					subContainerClassName="block overflow-hidden relative !h-[25rem] !w-[19rem] min-[400px]:!w-[20rem] md:!w-[23rem] lg:!w-[25rem] !rounded-lg"
					className="absolute top-0 left-0 rounded-lg"
					src="/images/preview.png"
					alt="project-image"
				/>
			</div>
		</SectionContainer>
	);
};

export default Project;
