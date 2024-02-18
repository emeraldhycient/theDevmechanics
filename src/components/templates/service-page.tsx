import services from "@/json/services/services.json";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import ImageBlock from "../atoms/image-block";
import gsap from "gsap";
import { elementObserver } from "../../../hooks";
import { useGSAP } from "@gsap/react";

const ServicePage = (): React.ReactNode => {
	return (
		<div className={`py-5 flex flex-col gap-y-10`}>
			{services.map((service, index) => (
				<div
					className={`services-item flex lg:justify-between  items-center ${index % 2 == 0 ? "lg:flex-row flex-col" : "lg:flex-row-reverse flex-col"} py-10 gap-y-24`}
					key={index}>
					<div className=" flex-col justify-center items-center flex relative">
						<div className="relative">
							<ImageBlock
								containerClassName="!z-30"
								subContainerClassName="!origin-center !rotate-[10deg] block overflow-hidden relative !h-[23rem] ls:!h-[25rem] !w-[19rem] sm:!w-[22rem] ls:!w-[25rem]"
								className={`!absolute ${index % 2 == 0 ? "!left-0 ls:!-left-7" : "!left-0 ls:!-left-7"} !top-0  `}
								src="/images/abt.jpg"
								alt="project-image"
							/>
							<div className="z-20 h-[15rem] w-[16.5rem] sm:!w-[19rem] ls:!w-[19rem] absolute rotate-[19deg] sm:rotate-[18deg] -top-3 right-1 sm:-top-2.5 sm:right-0.5 ls:-top-4 ls:right-9 origin-center bg-[#FEDEFF]"></div>

							<div className="h-[15rem] w-[17.5rem] sm:!w-[20rem] ls:!w-[21rem] -z-0 absolute rotate-[20deg] sm:rotate-[20deg] -top-10 right-1 sm:-top-10 sm:right-0.5 ls:-top-11 ls:right-9 origin-center bg-[#FCFAFF]"></div>
						</div>
					</div>
					<div
						className={`w-full lg:w-[55%] flex-col justify-center items-start gap-9 flex`}>
						<div className="flex flex-row">
							<div className="py-12 service-item-number">
								<p
									className={`font-bold lg:text-6xl text-[#141515] md:text-3xl text-3xl`}>
									{index + 1}
								</p>
							</div>
							<div
								className={`service-item-main-text-container flex flex-col gap-y-6 px-2 py-2 lg:px-5 gap-x-6 items-start justify-start`}>
								<div className="relative flex flex-col gap-y-5 px-5 before:content-[''] before:w-[0.01rem] before:h-full before:bg-[#676767] before:text-[#676767] before:absolute before:top-0 before:-left-0">
									<div>
										<p className={`text-[#141515]`}>
											{service.heading}
										</p>
									</div>

									<div>
										<p
											className={`text-[#141515] font-bold lg:text-5xl text-2xl w-full leading-[2rem] lg:leading-[3.5rem]`}>
											{service.title}
										</p>
									</div>
								</div>

								<div>
									<div>
										<p
											className={`text-[#676767] text-base leading-[2rem]`}>
											{service.text}
										</p>
									</div>

									{service.hasPoints && (
										<>
											{" "}
											<br />
											<div>
												<h3
													className={` text-[#141515] font-bold text-base mb-3`}>
													{service.points?.title}
												</h3>

												<div>
													<div
														className={`flex flex-col gap-y-2 [&_li]:text-base text-[#676767]`}>
														{service.points?.points.map(
															(point, index) => (
																<div
																	key={index}
																	className={`flex gap-x-3 lg:items-center items-start`}>
																	<Image
																		src={`/icons/bullet-point.svg`}
																		alt="Bullet Point Icon"
																		width={
																			16
																		}
																		height={
																			18
																		}
																		className={`w-[13px] lg:mt-0 mt-1`}
																	/>

																	<p>
																		{point}
																	</p>
																</div>
															),
														)}
													</div>
												</div>
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
