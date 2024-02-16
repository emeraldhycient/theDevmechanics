"use client";
import { fetchData } from "@/api";
import PageLoader from "@/components/atoms/page-loader";
import SectionContainer from "@/components/molecules/section-container.";
import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { BlogApiResponse, BlogIdApiResponse } from "../../../../../types";

type Props = {};

const BlogId = ({ params }: { params: { slug: string } }) => {
	const route = useParams();
	const { id } = route;
	console.log("id of blogs ", params);
	const { data, isLoading, isError, error } = useQuery<BlogIdApiResponse>({
		queryKey: ["data", id],
		queryFn: () => fetchData<BlogIdApiResponse>(`/blogs/${id}?populate=*`),
	});
	return (
		<SectionContainer>
			{isLoading && (
				<PageLoader className="w-full flex flex-row items-center justify-center py-48" />
			)}
			{data && (
				<div>
					<div>
						<p>{data?.data?.attributes?.date_created}</p>
					</div>

					<div>
						<div>
							<div>
								<p>
									{
										data?.data?.attributes?.author?.data
											?.attributes?.username
									}
								</p>
							</div>
						</div>
						<div>
							<div>
								<p>
									{
										data?.data?.attributes?.category?.data
											?.attributes?.title
									}
								</p>
							</div>
						</div>
						<div>
							<div>
								<p></p>
							</div>
						</div>
					</div>

					<div>
						<img src={``} alt="" />
					</div>

					<div className="flex flex-row ">
						<div>
							<p></p>
						</div>
						<div>
							<div
								dangerouslySetInnerHTML={{
									__html: data?.data?.attributes?.content,
								}}
							/>
						</div>
					</div>
				</div>
			)}
		</SectionContainer>
	);
};

export default BlogId;
