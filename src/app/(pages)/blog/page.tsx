"use client";
import BlogListItem from "@/components/atoms/blog-item";
import ImageBlock from "@/components/atoms/image-block";
import SectionContainer from "@/components/molecules/section-container.";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../../public/icons/arrow-icon";
import { BlogApiResponse } from "../../../../types/index";
import PageLoader from "@/components/atoms/page-loader";

type Props = {};
const fetchData = async (token: any): Promise<BlogApiResponse> => {
	const response = await fetch(
		"https://the-devmechanics-strapi-api.onrender.com/api/blogs",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
			},
		},
	);
	if (!response.ok) {
		throw new Error("Network response was not ok");
	}
	return response.json();
};

const BlogPage = (props: Props) => {
	const { data, isLoading, isError, error } = useQuery({
		queryKey: ["data"],
		queryFn: fetchData,
	});

	const firstBlog = data?.data[0]?.attributes;

	if (isLoading) return <div>Loading...</div>;
	if (isError) return <div>Error: {error.message}</div>;

	return (
		<SectionContainer containerClassName="pt-16 md:pt-20">
			<BlogListItem
				flexContainerClassName="flex-col gap-y-10 ls:flex-row items-center justify-between"
				contentContainerClassName="flex flex-col items-start justify-start gap-y-8 ls:w-[50%]"
				categoryClassName="font-medium text-lg"
				titleClassName="font-medium text-3xl md:text-4xl"
				descriptionClassName="text-[#9FA4A6] leading-7"
				linkClassName="group flex flex-row items-center gap-x-2 text-[0.9375rem] text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF]"
				imageContainerClassName=""
				imageClassName=""
				src="/images/abt.jpg"
				alt="project-image"
				category="Featured Post"
				title={firstBlog?.title}
				description="Founded with a vision to revolutionize the world of software development, we emerged as a beacon of innovation in the tech industry."
				linkHref=""
				arrowIconClassName="-rotate-45 w-4 h-4 stroke-white"
			/>

			{/* <div className="flex flex-col mt-16 gap-y-14">
				<div className="text-3xl font-medium">
					<p>All posts</p>
				</div>

				<div className="flex flex-col gap-y-20">
					{[1, 2, 3, 4, 5].map((child, index) => (
						<BlogListItem
							key={index}
							flexContainerClassName="flex-col gap-y-10 ls:flex-row-reverse items-center justify-end gap-x-10"
							contentContainerClassName="flex flex-col items-start justify-start gap-y-8 ls:w-[50%]"
							categoryClassName="font-normal text-lg"
							titleClassName="font-medium text-3xl md:text-4xl"
							descriptionClassName="text-[#9FA4A6] leading-7"
							linkClassName="group flex flex-row items-center gap-x-2 text-[0.9375rem] text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF]"
							imageContainerClassName=""
							imageClassName=""
							src="/images/abt.jpg"
							alt="project-image"
							category="Featured Post"
							title="Design trends to watch in 2024"
							description="Founded with a vision to revolutionize the world of software development, we emerged as a beacon of innovation in the tech industry."
							linkHref=""
							arrowIconClassName="-rotate-45 w-4 h-4 stroke-white"
						/>
					))}
				</div>
			</div> */}
		</SectionContainer>
	);
};

export default BlogPage;
