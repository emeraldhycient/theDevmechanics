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
					className={`text-3xl md:text-4xl lg:text-5xl font-semibold py-4 w-full md:w-[36rem] ls:w-[37rem] lg:w-[50rem] leading-[3rem] md:leading-[4rem] lg:leading-[4.5rem]`}>
					<p>
						We are a team that believes <br /> in the power of
						technology.
					</p>
				</div>
				<div className="w-full md:max-w-[80%] lg:max-w-[55.009%]">
					<p>
						Founded with a vision to revolutionize the world of
						software development, we emerged as a beacon of
						innovation in the tech industry. Our mission has been
						clear from the start to deliver exceptional, customized
						software solutions that propel businesses into the
						future.
					</p>
				</div>

				<SocialIcons />
			</div>

			<div className="mt-24">
				<BannerImage src={`/images/about-bg.png`} />
			</div>

			<div className="mt-20 md:mt-40 flex flex-col ls:flex-row lg:justify-between gap-y-32 items-center ">
				<div className="w-full lg:w-[50%] flex-col justify-center items-start gap-9 inline-flex">
					<div className="text-neutral-900 font-bold leading-[3rem] md:leading-[3.5rem] text-3xl md:text-4xl">
						The Architects of Innovation.
					</div>
					<div className="text-neutral-900 font-normal leading-[27px]">
						Founded with a vision to revolutionize the world of
						software development, The DevMechanics emerged as a
						beacon of innovation in the tech industry.{" "}
					</div>
					<div className="text-neutral-900 font-normal leading-[27px]">
						Our mission has been clear from the start: to deliver
						exceptional, customized software solutions that propel
						businesses into the future. We are a team that believes
						in the power of technology to transform, simplify, and
						enhance both business processes and everyday life.
					</div>
				</div>
				<div className="flex-col justify-center items-center flex relative">
					<div className="relative">
						<ImageBlock
							containerClassName="!z-30"
							subContainerClassName="!origin-center !rotate-[10deg] block overflow-hidden relative !h-[20rem] !w-[19rem] sm:!w-[22rem] md:!w-[20rem]"
							className="!absolute !top-0 !left-0 lg:!-left-7 "
							src="/images/abt.jpg"
							alt="project-image"
						/>
						<div className="h-[15rem] w-[15rem] rotate-[-70.70deg] -z-0 absolute bottom-24 right-9 origin-center bg-fuchsia-100" />
					</div>
				</div>
			</div>

			<div className="mt-36 flex flex-col gap-y-16">
				<SectionHeader
					className="w-full md:w-[27rem] lg:w-[28rem]"
					headerText="Our Team"
					subHeaderText="High-quality results and a positive team spirit 🔥"
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
