import React from "react";
import Services from "@/json/services/services.json";
import Image from "next/image";
import ImageBlock from "../atoms/image-block";

const ServicePage = (): React.ReactNode => {
	return (
		<div className={`py-5 flex flex-col gap-y-10`}>
			{Services.map((service, index) => (
				<div
					className={`flex lg:justify-between  items-center ${index % 2 == 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col"} py-10 gap-y-24`}
					key={index}>
					<div className="flex-col justify-center items-center flex relative">
						<div className="relative">
							<ImageBlock
								containerClassName="!z-30"
								subContainerClassName="!origin-center !rotate-[10deg] block overflow-hidden relative !h-[20rem] !w-[19rem] sm:!w-[22rem] md:!w-[20rem]"
								className={`!absolute ${index % 2 == 0 ? "!left-0 lg:!-left-0" : "!right-0 lg:!-right-0"} !top-0 `}
								src="/images/abt.jpg"
								alt="project-image"
							/>
							<div className="h-[15rem] w-[15rem] rotate-[-70.70deg] -z-0 absolute bottom-24 right-9 origin-center bg-fuchsia-100" />
						</div>
					</div>

					<div
						className={`w-full lg:w-[60%] flex-col justify-center items-start gap-9 inline-flex`}>
						<div className="flex flex-row">
							<div className="py-12">
								<p
									className={`font-bold lg:text-6xl md:text-3xl text-3xl`}>
									{index + 1}
								</p>
							</div>
							<div
								className={` flex flex-col gap-y-6 px-2 py-2 lg:px-5 gap-x-6 items-start justify-start`}>
								<div className="relative flex flex-col gap-y-5 px-5 before:content-[''] before:w-[0.01rem] before:h-full before:bg-[#676767] before:text-[#676767] before:absolute before:top-0 before:-left-0">
									<div>
										<p className={`lg:text-sm text-[12px]`}>
											{service.heading}
										</p>
									</div>

									<div>
										<p
											className={`font-bold lg:text-[30px] text-2xl w-full lg:w-[25rem] leading-[2rem] lg:leading-[2.5rem]`}>
											{service.title}
										</p>
									</div>
								</div>

								<div>
									<div>
										<p
											className={`text-[#676767] lg:text-[15px] text-sm leading-[2rem]`}>
											{service.text}
										</p>
									</div>

									{service.hasPoints && (
										<>
											{" "}
											<br />
											<div>
												<h3
													className={`font-bold text-base mb-3`}>
													{service.points?.title}
												</h3>

												<ul
													className={`flex flex-col gap-y-2 lg:[&_li]:text-[15px] text-[#676767] [&_li]:text-sm`}>
													{service.points?.points.map(
														(point, index) => (
															<li
																key={index}
																className={`flex gap-x-3 lg:items-center items-start`}>
																<Image
																	src={`/icons/bullet-point.svg`}
																	alt="Bullet Point Icon"
																	width={16}
																	height={18}
																	className={`w-[13px] lg:mt-0 mt-1`}
																/>

																<p>{point}</p>
															</li>
														),
													)}
												</ul>
											</div>
										</>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ServicePage;
