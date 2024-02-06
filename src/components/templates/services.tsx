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
				subHeaderText="Software architecture, design and implementation for any
				industry 🔥"
				className="mt-24 md:mt-28"
				subHeaderClassName="mb-20 lg:w-[70%]"
			/>

			<div
				className={`grid grid-cols-1 mx:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-9 gap-y-10`}>
				{ServicesList.map((service, index) => (
					<div
						key={index}
						className={`flex flex-col justify-between py-6 px-4 border border-[#FCFAFF] rounded-[29.245px] w-full md:w-[250px] lg:w-[250px] h-[300px] hover:shadow-sm ease-in-out duration-300`}>
						<section>
							<Image
								src={service.icon}
								width={62.39}
								height={62.39}
								className={`w-[62px] h-[62px]`}
								alt=""
							/>

							<h3
								className={`font-bold text-base py-3 capitalize`}>
								{service.title}
							</h3>
						</section>

						<p className={`text-sm`}>{service.writeup}</p>
					</div>
				))}
			</div>
		</SectionContainer>
	);
};

export default Services;
