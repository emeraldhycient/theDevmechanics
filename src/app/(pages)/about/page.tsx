import SectionHeader from "@/components/atoms/section-header";
import TeamItem from "@/components/atoms/team-item";
import { SocialIcons } from "@/components/molecules";
import SectionContainer from "@/components/molecules/section-container.";
import Image from "next/image";
import React from "react";
import team from "../../../json/team.json";
type Props = {};

const About = (props: Props) => {
	return (
		<SectionContainer>
			<div className="flex-col justify-center items-start gap-8 flex w-full lg:max-w-[60%]">
				<div className=" text-neutral-900 font-semibold leading-[3rem] md:leading-[4rem] lg:leading-[4rem] text-3xl md:text-4xl lg:text-5xl ">
					We are a team that believes in the power of technology.
				</div>
				<div className=" text-neutral-900 text-sm font-normal leading-[27px]">
					Founded with a vision to revolutionize the world of software
					development, we emerged as a beacon of innovation in the
					tech industry. Our mission has been clear from the start to
					deliver exceptional, customized software solutions that
					propel businesses into the future.
				</div>
				<div className="justify-start items-center gap-4 inline-flex">
					<SocialIcons />
				</div>
			</div>

			<div className="mt-20">
				<Image
					src={`/images/services.svg`}
					width={800}
					height={500}
					className={`w-full object-top lg:h-[200px] h-[100px] object-cover lg:rounded-t-[3rem] rounded-t-3xl`}
					alt="Image"
				/>
			</div>

			<div className="mt-28 md:mt-36 flex flex-col md:flex-row lg:justify-between gap-y-32 items-center ">
				<div className="w-full lg:w-[50%] flex-col justify-center items-start gap-9 inline-flex">
					<div className="text-neutral-900 text-3xl lg:text-4xl font-semibold leading-[45px] lg:leading-[60px]">
						The Architects of Innovation.
					</div>
					<div className="text-neutral-900 text-sm font-normal leading-[27px]">
						Founded with a vision to revolutionize the world of
						software development, The DevMechanics emerged as a
						beacon of innovation in the tech industry.{" "}
					</div>
					<div className="text-neutral-900 text-sm font-normal leading-[27px]">
						Our mission has been clear from the start: to deliver
						exceptional, customized software solutions that propel
						businesses into the future. We are a team that believes
						in the power of technology to transform, simplify, and
						enhance both business processes and everyday life.
					</div>
				</div>
				<div className="flex-col justify-center items-center flex relative">
					<div className="relative">
						<div className="z-30 relative block">
							<div className=" origin-center md:rotate-[10deg] block overflow-hidden relative h-[20rem] w-[19rem] sm:w-[22rem] md:w-[20rem] ">
								<img
									src={`/images/preview.png`}
									alt="project-image"
									className="absolute top-0 left-0 object-cover h-full w-full "
								/>
							</div>
						</div>
						<div className="h-[20rem] w-[19rem] sm:w-[22rem] md:w-[20rem] md:rotate-[-70.70deg] -z-0 absolute bottom-0 right-0 origin-center bg-fuchsia-100" />
					</div>
				</div>
			</div>

			<div className="mt-28 flex flex-col gap-y-16">
				<SectionHeader
					headerText="Our Team"
					subHeaderText="High-quality results and a positive team spirit 🔥"
				/>
				<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8">
					{team.map((child, index) => (
						<TeamItem key={index} />
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
