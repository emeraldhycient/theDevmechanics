import React from "react";
import { SocialIcons } from ".";
import SectionContainer from "./section-container.";

const HeroSection = (): React.ReactNode => {
	return (
		<SectionContainer
			containerClassName="lg:pt-20 !pb-16 lg:pb-28"
			className={`flex flex-col items-start justify-start `}>
			<div className="">
				<p>Software Design Agency</p>
			</div>
			<div
				className={`text-4xl md:text-5xl lg:text-6xl font-bold py-4 w-full leading-[3rem] md:leading-[4rem] lg:leading-[5rem]`}>
				<p>
					We build custom software to{" "}
					<br className="hidden md:block" /> meet your unique needs,
					<br className="hidden md:block" /> driving Efficiency &{" "}
					<br className="hidden md:block" />{" "}
					<span
						className={`bg-gradient-to-tl from-violet-500 via-purple-800 to-purple-400 bg-clip-text text-transparent`}>
						Organization
					</span>
					.
				</p>
			</div>
			<SocialIcons />
		</SectionContainer>
	);
};

export default HeroSection;
