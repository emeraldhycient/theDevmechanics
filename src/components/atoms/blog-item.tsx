import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";
import ImageBlock from "./image-block";

const BlogListItem = ({
	flexContainerClassName,
	contentContainerClassName,
	categoryClassName,
	titleClassName,
	descriptionClassName,
	linkClassName,
	imageContainerClassName,
	imageClassName,
	src,
	alt,
	category,
	title,
	description,
	linkHref,
	arrowIconClassName,
	date,
	author,
	authorClassName,
}: {
	flexContainerClassName?: string;
	contentContainerClassName?: string;
	categoryClassName?: string;
	titleClassName?: string;
	descriptionClassName?: string;
	linkClassName?: string;
	imageContainerClassName?: string;
	imageClassName?: string;
	src: string;
	alt: string;
	category: string;
	title?: string;
	description?: string;
	linkHref: string;
	arrowIconClassName: string;
	date?: string;
	author?: string;
	authorClassName?: string;
}) => {
	const newTitle = title ?? "";
	return (
		<div className={`flex ${flexContainerClassName}`}>
			<div className={`flex ${contentContainerClassName}`}>
				<div className={`font-medium text-lg ${categoryClassName}`}>
					<p>{category}</p>
				</div>

				<div className="flex flex-col gap-y-2">
					<div
						className={`font-medium text-3xl md:text-4xl ${titleClassName}`}>
						<p>{title}</p>
					</div>

					{author && (
						<div
							className={`text-sm font-medium ${authorClassName}`}>
							<p>
								By {author} | {date}
							</p>
						</div>
					)}
				</div>

				<div
					className={`text-[#9FA4A6] leading-7 ${descriptionClassName}`}>
					<p>{description}</p>
				</div>

				<div>
					<Link
						href={`/blog/${encodeURIComponent(newTitle)}`}
						className={`group flex flex-row items-center gap-x-2 text-[0.9375rem] text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] ${linkClassName}`}>
						<span>Read More</span>{" "}
						<span>
							<ArrowIcon className={`${arrowIconClassName}`} />
						</span>
					</Link>
				</div>
			</div>
			<div
				className={`flex-col justify-center items-center flex relative ${imageContainerClassName}`}>
				<div className="relative">
					<ImageBlock
						containerClassName=""
						subContainerClassName="block overflow-hidden relative !h-[23rem] ls:!h-[25rem] !w-[19rem] sm:!w-[22rem] ls:!w-[25rem]"
						className={`absolute top-0 ${imageClassName}`}
						src={src}
						alt={alt}
					/>
				</div>
			</div>
		</div>
	);
};

export default BlogListItem;
