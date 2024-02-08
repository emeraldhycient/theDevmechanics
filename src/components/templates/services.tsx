import Image from "next/image";
import React from "react";
import ServicesList from "@/json/services.json";
import SectionContainer from "../molecules/section-container.";
import SectionHeader from "../atoms/section-header";
import { BannerImage } from "../atoms";

const Services = (): React.ReactNode => {
	return (
		<SectionContainer containerClassName={`!pt-20`}>
			<BannerImage src={`/images/home-bg.png`} />

			<SectionHeader
				headerText="Solution For Every Factor"
				subHeaderText={
					<>
						Software architecture, design and{" "}
						<br className="hidden md:block" /> implementation for
						any industry 🔥
					</>
				}
				className="mt-20 md:mt-20"
				subHeaderClassName="mb-16 "
			/>

			<div
				className={`grid grid-cols-1 mx:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-9 gap-y-10`}>
				{ServicesList.map((service, index) => (
					<div
						key={index}
						className={`flex flex-col justify-between py-6 px-4 border border-[#FCFAFF] rounded-[29.245px] w-full md:w-[250px] lg:w-[250px] gap-y-10 hover:shadow-sm ease-in-out duration-300`}>
						<div className="">
							<Image
								src={service.icon}
								width={62.39}
								height={62.39}
								className={`w-[62px] h-[62px]`}
								alt=""
							/>

							<div className=" h-[7rem]">
								<p
									className={`font-medium text-[1.25rem] py-3 capitalize`}>
									{service.title}
								</p>
							</div>
						</div>

						<div className=" h-[7rem]">
							<p className={`text-[0.9375rem]`}>
								{service.writeup}
							</p>
						</div>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};

export default Services;
