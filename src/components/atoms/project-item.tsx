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
				className={`w-full md:w-[53%] text-center md:text-start flex flex-col items-center md:items-start ${textContainerClassName}`}>
				<div className="text-base mb-5">
					<p>{projectName}</p>
				</div>
				<div className="text-[2rem] font-medium bg-gradient-to-r from-slate-700 to-gray-800 bg-clip-text text-transparent">
					<p>{projectMotto}</p>
				</div>
				<div className="my-5 text-[1.10rem] font-normal text-[#9FA4A6] leading-loose">
					<p>{projectDescription}</p>
				</div>
				<div className="text-[1.10rem] text-[#141515]">
					<p>
						{projectServices ??
							"UI/UX Design, Front & Back End Development"}
					</p>
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
