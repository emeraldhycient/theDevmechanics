import SectionHeader from "@/components/atoms/section-header";
import TeamItem from "@/components/atoms/team-item";
import { SocialIcons } from "@/components/molecules";
import SectionContainer from "@/components/molecules/section-container.";
import React from "react";
import team from "../../../json/team.json";
import { BannerImage } from "@/components/atoms";
import ImageBlock from "@/components/atoms/image-block";
type Props = {};

const About = (props: Props) => {
	return (
		<SectionContainer containerClassName="!pt-16 md:!pt-24">
			<div className="flex-col justify-center items-start gap-6 flex pb-20 md:pb-24">
				<div
					className={`text-4xl md:text-5xl lg:text-6xl font-semibold py-4 w-full md:w-[36rem] ls:w-[37rem] lg:w-[50rem] leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]`}>
					<p>
						We are a team that believes{" "}
						<br className="hidden md:block" /> in the power of
						technology.
					</p>
				</div>
				<div className="w-full text-[1.25rem] leading-[2.1875rem]">
					<p>
						Founded with a vision to revolutionize the world of
						software development, we emerged as a{" "}
						<br className="hidden md:block" /> beacon of innovation
						in the tech industry. Our mission has been clear from
						the start to deliver <br className="hidden md:block" />{" "}
						exceptional, customized software solutions that propel
						businesses into the future.
					</p>
				</div>

				<SocialIcons />
			</div>

			<div className="mt-16">
				<BannerImage src={`/images/about-bg.png`} />
			</div>

			<div className="mt-20 md:mt-32 flex flex-col lg:flex-row lg:justify-between gap-y-32 items-center ">
				<div className="w-full lg:w-[53%] flex-col justify-center items-start gap-9 inline-flex">
					<div className="text-neutral-900 font-bold leading-[3rem] md:leading-[3.5rem] text-3xl md:text-[2.60rem]">
						The Architects of Innovation.
					</div>
					<div className="text-neutral-900 text-[1.25rem] leading-[2.5rem]">
						Founded with a vision to revolutionize the world of
						software development, The DevMechanics emerged as a
						beacon of innovation in the tech industry.{" "}
					</div>
					<div className="text-neutral-900  text-[1.25rem] leading-[2.5rem]">
						Our mission has been clear from the start: to deliver
						exceptional, customized software solutions that propel
						businesses into the future. We are a team that believes
						in the power of technology to transform, simplify, and
						enhance both business processes and everyday life.
					</div>
				</div>
				<div className=" flex-col justify-center items-center flex relative">
					<div className="relative">
						<ImageBlock
							containerClassName="!z-30"
							subContainerClassName="!origin-center !rotate-[10deg] block overflow-hidden relative !h-[23rem] ls:!h-[25rem] !w-[19rem] sm:!w-[22rem] ls:!w-[25rem]"
							className="!absolute !top-0 !left-0 ls:!-left-7 "
							src="/images/abt.jpg"
							alt="project-image"
						/>
						<div className="z-20 h-[15rem] w-[16.5rem] sm:!w-[19rem] ls:!w-[19rem] absolute rotate-[19deg] sm:rotate-[18deg] -top-3 right-1 sm:-top-2.5 sm:right-0.5 ls:-top-4 ls:right-9 origin-center bg-[#FEDEFF]" />

						<div className="h-[15rem] w-[17.5rem] sm:!w-[20rem] ls:!w-[21rem] -z-0 absolute rotate-[20deg] sm:rotate-[20deg] -top-10 right-1 sm:-top-10 sm:right-0.5 ls:-top-11 ls:right-9 origin-center bg-[#FCFAFF]" />
					</div>
				</div>
			</div>

			<div className="mt-36 flex flex-col gap-y-16">
				<SectionHeader
					className="w-full "
					headerText="Our Team"
					subHeaderText={
						<>
							<p>
								High-quality results and{" "}
								<br className="hidden md:block" /> a positive
								team spirit 🔥
							</p>
						</>
					}
				/>
				<div className="grid grid-cols-1 sg:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-8">
					{team.map((child, index) => (
						<TeamItem key={index} />
					))}
				</div>
			</div>
		</SectionContainer>
	);
};

export default About;
