// import React from "react";
// import ImageBlock from "./image-block";
// import Link from "next/link";
// import ArrowIcon from "../../../public/icons/arrow-icon";

// type Props = {
// 	isEven?: number;
// 	title?: string;
// 	subtitle?: string;
// 	description?: string;
// 	skills?: string;
// 	viewProjectLink: string;
// 	caseStudyLink: string;
// 	imageSrc: string;
// 	altText: string;
// };

// const ProjectItem = ({
// 	title,
// 	subtitle,
// 	description,
// 	skills,
// 	viewProjectLink,
// 	caseStudyLink,
// 	imageSrc,
// 	altText,
// 	isEven,
// }: Props) => {
// 	return (
// 		<div
// 			className={`flex flex-col-reverse items-center justify-between gap-y-14 ${
// 				isEven === 0 ? "md:flex-row-reverse " : "md:flex-row "
// 			} px-3 md:px-12 py-9 md:py-7 gap-y-14`}>
// 			<div className="w-full md:w-[45%] text-center md:text-start flex flex-col items-center md:items-start ">
// 				<div className="text-sm mb-5">
// 					<p>{title}</p>
// 				</div>
// 				<div className="text-2xl font-semibold bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
// 					<p>{subtitle}</p>
// 				</div>
// 				<div className="text-base my-5 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent leading-loose">
// 					<p>
// 						{description}Vision Pay is an innovative agency banking
// 						app designed to make easy and secure banking
// 						transactions. Our development focused on user-centric
// 						design and reliable functionality.
// 					</p>
// 				</div>
// 				<div className="text-base font-medium bg-gradient-to-r from-gray-900 to-neutral-800 bg-clip-text text-transparent">
// 					<p>{skills}</p>
// 				</div>

// 				<div>
// 					<div className="mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center ml-auto gap-x-3 gap-y-5">
// 						<Link
// 							href=""
// 							id=""
// 							className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-gradient-to-r from-purple-500 to-purple-700 min-h-fit min-w-fit border border-[#9743FF]
// 						hover:text-[#141515] hover:bg-white transition duration-500 ease-in-out">
// 							<span>View Project</span>{" "}
// 							<span>
// 								<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] transition duration-500 ease-in-out" />
// 							</span>
// 						</Link>
// 						<Link
// 							href=""
// 							id=""
// 							className="text-sm text-primary-blue no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-[#FBF3EF] hover:text-white hover:bg-gradient-to-r from-zinc-700 to-gray-600 transition duration-500 ease-in-out">
// 							Read Case Study
// 						</Link>
// 					</div>
// 				</div>
// 			</div>

// 			<ImageBlock
// 				subContainerClassName="block overflow-hidden relative !h-[25rem] !w-[19rem] min-[400px]:!w-[20rem] md:!w-[23rem] lg:!w-[25rem] !rounded-3xl"
// 				className="absolute top-0 left-0 "
// 				// src={imageSrc}
// 				src="/images/preview.png"
// 				alt={altText}
// 			/>
// 		</div>
// 	);
// };

// export default ProjectItem;
import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import ImageBlock from "./image-block";

interface ProjectItemProps {
	projectName?: string;
	projectDescription?: string;
	projectServices?: string;
	viewProjectLink?: string;
	readCaseStudyLink?: string;
	viewProjectText?: string;
	readCaseStudyText?: string;
	imageSrc: string;
	imageAlt?: string;
	containerClassName?: string;
	textContainerClassName?: string;
	imageContainerClassName?: string;
	projectMotto?: string;
	isEven?: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
	projectName,
	projectDescription,
	projectServices,
	viewProjectLink,
	readCaseStudyLink,
	viewProjectText = "View Project",
	readCaseStudyText = "Read Case Study",
	imageSrc,
	imageAlt = "project-image",
	containerClassName = "",
	textContainerClassName = "",
	imageContainerClassName = "",
	projectMotto = "",
	isEven,
}) => {
	return (
		<div
			className={`flex flex-col items-center justify-between rounded-2xl ${
				isEven === 0 ? "md:flex-row-reverse " : "md:flex-row "
			}  gap-y-14 ${containerClassName}`}>
			<div
				className={`w-full md:w-[48%] text-center md:text-start flex flex-col items-center md:items-start ${textContainerClassName}`}>
				<div className="text-sm mb-5">
					<p>{projectName}</p>
				</div>
				<div className="text-[2rem] font-medium bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
					<p>{projectMotto}</p>
				</div>
				<div className="my-5 text-[1.15rem] font-normal text-[#9FA4A6] leading-loose">
					<p>{projectDescription}</p>
				</div>
				<div className="text-[1.25rem] text-[#141515]">
					<p>{projectServices}</p>
				</div>

				<div>
					<div className="mt-7 md:mt-5 flex flex-col min-[360px]:flex-row items-center ml-auto gap-x-4 gap-y-5">
						{viewProjectLink && (
							<>
								<a
									href={viewProjectLink}
									className="group flex flex-row items-center gap-x-2 text-[0.9375rem] text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
                "
									target="_blank"
									rel="noopener noreferrer">
									<span>{viewProjectText}</span>{" "}
									<span>
										<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white" />
									</span>
								</a>
							</>
						)}
						{readCaseStudyLink && (
							<Link
								href={readCaseStudyLink}
								className="text-sm text-primary-blue no-underline text-[0.9375rem] capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-transparent">
								{readCaseStudyText}
							</Link>
						)}
					</div>
				</div>
			</div>

			<ImageBlock
				subContainerClassName={`block overflow-hidden relative !h-[25rem] !w-[19rem] min-[400px]:!w-[20rem] md:!w-[23rem] lg:!w-[25rem] !rounded-3xl ${imageContainerClassName}`}
				className="absolute top-0 left-0"
				src={imageSrc}
				alt={imageAlt}
			/>
		</div>
	);
};

export default ProjectItem;
