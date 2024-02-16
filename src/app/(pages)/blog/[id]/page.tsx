"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BlogApiResponse, BlogIdApiResponse } from "../../../../../types";
import { fetchData } from "@/api";
import SectionContainer from "@/components/molecules/section-container.";
import PageLoader from "@/components/atoms/page-loader";
import { useRouter, useParams } from "next/navigation";

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
			{data && <>helo World</>}
		</SectionContainer>
	);
};

export default BlogId;
