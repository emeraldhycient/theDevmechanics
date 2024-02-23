"use client";
import { fetchData } from "@/api";
import For from "@/components/atoms/for";
import ImageBlock from "@/components/atoms/image-block";
import PageLoader from "@/components/atoms/page-loader";
import { SocialIcons } from "@/components/molecules";
import SectionContainer from "@/components/molecules/section-container.";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import { BlogApiResponse, BlogIdApiResponse } from "../../../../../types";
import BlogAuthor from "@/components/molecules/blog-author";
import PersonIcon from "../../../../../public/icons/person-icon";
import CategoryIcon from "../../../../../public/icons/category-icon";
import BlogHeaderTag from "@/components/atoms/blog-header-tag";
import LinkedIn from "../../../../../public/icons/linked-in";
import { parse } from "date-fns/parse";

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
					<div className="w-full ls:w-[75%] mx-auto mt-0 flex flex-col gap-y-5">
						<div className="text-[#676767]">
							<p>
								{format(
									parse(
										data?.data?.attributes?.date_created.toString(),
										"yyyy-MM-dd",
										new Date(),
									),
									"do MMMM, yyyy",
								)}
							</p>
						</div>

						<div>
							<div className="text-4xl ls:text-5xl leading-normal ls:leading-normal font-semibold">
								<p>{data?.data?.attributes?.title}</p>
							</div>
						</div>
						<div className="flex flex-row items-center gap-x-5 text-[#676767]">
							<div className="flex flex-row items-center gap-x-2">
								<span>
									<PersonIcon
										className="w-5 h-5"
										stroke="#676767"
									/>
								</span>
								<p>
									{
										data?.data?.attributes
											?.users_permissions_user?.data
											?.attributes?.username
									}
								</p>
							</div>

							<div className="capitalize flex flex-row items-center gap-x-2">
								<span>
									<CategoryIcon
										className="w-5 h-5"
										stroke="#676767"
									/>
								</span>
								<p>
									{
										data?.data?.attributes?.blog_categories
											?.data[0]?.attributes?.name
									}
								</p>
							</div>
						</div>
					</div>

					<div className="my-16 relative block w-full h-[25rem] overflow-hidden">
						<img
							className="absolute object-cover h-full w-full"
							src={`${data?.data?.attributes?.image?.data?.attributes?.url}`}
							alt=""
						/>
					</div>

					<div className="flex flex-col items-center justify-center ">
						<div className="w-11/12 md:w-[70%] mx-auto my-0">
							<BlocksRenderer
								content={data?.data?.attributes?.new_content}
								blocks={{
									paragraph: ({ children }) => (
										<p className="text-neutral900 text-base md:text-lg my-7">
											{children}
										</p>
									),
									"list-item": ({ children, plainText }) => (
										<li className="flex flex-row items-start my-1.5 gap-x-2.5">
											<span className="mt-1">
												<svg
													width="14"
													height="16"
													viewBox="0 0 14 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg">
													<path
														d="M1 7.99992V5.32992C1 2.01992 3.35 0.659923 6.22 2.31992L8.53 3.65992L10.84 4.99992C13.71 6.65992 13.71 9.36992 10.84 11.0299L8.53 12.3699L6.22 13.7099C3.35 15.3399 1 13.9899 1 10.6699V7.99992Z"
														stroke="black"
														strokeWidth="1"
														strokeMiterlimit="10"
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
											</span>
											{children}
										</li>
									),

									// eslint-disable-next-line react/no-children-prop
									heading: ({ children, level }) => (
										<BlogHeaderTag
											// eslint-disable-next-line react/no-children-prop
											children={children}
											level={level}
										/>
									),
								}}
							/>

							<div className="my-5 flex flex-row items-center flex-wrap gap-5 capitalize text-sm">
								<For
									each={
										data?.data?.attributes?.blog_tags?.data
									}>
									{(tag, index) => (
										<div
											key={index}
											className="border rounded-full py-1.5 px-2">
											{tag?.attributes?.name}
										</div>
									)}
								</For>
							</div>

							<BlogAuthor
								username={
									data?.data?.attributes
										?.users_permissions_user?.data
										?.attributes?.username
								}
								containerClassName="mt-10 flex-col sm:flex-row items-start justify-start sm:justify-between gap-y-4 "
								linkedin={
									data?.data?.attributes
										?.users_permissions_user?.data
										?.attributes?.linkedin
								}
								instagram={
									data?.data?.attributes
										?.users_permissions_user?.data
										?.attributes?.instagram
								}
								twitter={
									data?.data?.attributes
										?.users_permissions_user?.data
										?.attributes?.twitter
								}
							/>
						</div>
					</div>
				</div>
			)}
		</SectionContainer>
	);
};

export default BlogId;
