import React from "react";
import { SocialIcons } from ".";
import SectionContainer from "./section-container.";

const HeroSection = (): React.ReactNode => {
	return (
		<>
			<SectionContainer
				containerClassName="lg:pt-24 lg:pb-36"
				className={`flex flex-col items-start justify-start `}>
				<div className="">
					<p>Software Design Agency</p>
				</div>
				<h1
					className={`text-3xl md:text-4xl lg:text-5xl font-bold py-4 w-full md:w-[36rem] ls:w-[37rem] lg:w-[50rem] leading-[3rem] md:leading-[4rem] lg:leading-[5rem]`}>
					We build custom software to meet your unique needs, driving
					Efficiency &{" "}
					<span
						className={`bg-gradient-to-tl from-violet-500 via-purple-800 to-purple-400 bg-clip-text text-transparent`}>
						Organization
					</span>
					.
				</h1>
				<SocialIcons />
			</SectionContainer>
		</>
	);
};

export default HeroSection;
