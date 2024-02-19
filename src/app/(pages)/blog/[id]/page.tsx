"use client";
import { fetchData } from "@/api";
import PageLoader from "@/components/atoms/page-loader";
import SectionContainer from "@/components/molecules/section-container.";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { BlogApiResponse, BlogIdApiResponse } from "../../../../../types";
import For from "@/components/atoms/for";
import { format } from "date-fns";

type Props = {};

const BlogId = ({ params }: { params: { slug: string } }) => {
	const route = useParams();
	const { id } = route;
	const { data, isLoading, isError, error } = useQuery<BlogIdApiResponse>({
		queryKey: ["blog", id],
		queryFn: () => fetchData<BlogIdApiResponse>(`/blogs/${id}?populate=*`),
	});

	return (
		<SectionContainer containerClassName="pt-20">
			{isLoading && (
				<PageLoader className="w-full flex flex-row items-center justify-center py-48" />
			)}
			{data && (
				<div>
					<div className="w-full ls:w-[65%] mx-auto mt-0 flex flex-col gap-y-5">
						<div className="text-[#676767]">
							<p>{data?.data?.attributes?.date_created}</p>
						</div>

						<div>
							<div className="text-4xl ls:text-5xl leading-normal ls:leading-normal font-semibold">
								<p>{data?.data?.attributes?.title}</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-x-5 text-[#676767]">
							<div>
								<p>
									{
										data?.data?.attributes?.author?.data
											?.attributes?.username
									}
								</p>
							</div>

							<div>
								<p>
									{
										data?.data?.attributes?.category?.data
											?.attributes?.title
									}
								</p>
							</div>
						</div>
					</div>

					<div className="my-16 relative block w-full h-[25rem] overflow-hidden">
						<img
							className="absolute object-cover h-full w-full"
							src={`https://the-devmechanics-strapi-api.onrender.com${data?.data?.attributes?.image?.data?.attributes?.url}`}
							alt=""
						/>
					</div>

					<div className="flex flex-row ">
						<div className="hidden md:flex w-[30%]">
							<p>{data?.data?.attributes?.date_created}</p>
						</div>
						<div className="grow w-full flex flex-col gap-y-5">
							<div
								dangerouslySetInnerHTML={{
									__html: data?.data?.attributes?.content,
								}}
							/>
							<div className="flex flex-row items-center gap-x-5 capitalize text-sm">
								<For each={data?.data?.attributes?.tags?.data}>
									{(tag, index) => (
										<div
											key={index}
											className="border rounded-sm py-1 px-1.5">
											{tag?.attributes?.name}
										</div>
									)}
								</For>
							</div>
						</div>
					</div>
				</div>
			)}
		</SectionContainer>
	);
};

export default BlogId;
