import { BannerImage } from "@/components/atoms";
import SectionHeader from "@/components/atoms/section-header";
import HeroContainer from "@/components/molecules/hero-container";
import SectionContainer from "@/components/molecules/section-container.";
import { ServicePage } from "@/components/templates";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = (): React.ReactNode => {
	return (
		<SectionContainer>
			<HeroContainer
				title={
					<>
						<p>
							We bring your dreams to{" "}
							<br className="hidden md:block" /> life, with
							optimized processes.
						</p>
					</>
				}
				description="Explore our creative services and experience expert software
					solutions tailored to any industry. From architecture to
					implementation, we bring innovation to life."
				descriptionClassName="md:!w-[45rem]"
				titleClassName=""
				firstLink="/"
				firstLinkText="Read More"
				secondLinkText="Get a Quote"
				secondLink="/"
				containerClassName="!mb-32"
				icon={<></>}
			/>
			<div className="mt-24">
				{" "}
				<BannerImage src={`/images/services/banner.svg`} />
			</div>
			<div className="mt-24 flex flex-col gap-y-9">
				<SectionHeader
					className="w-full"
					headerText="Crafting Innovative Solutions"
					subHeaderText={
						<>
							<p>
								Expert Software Architecture, Design,{" "}
								<br className="hidden md:block" /> and
								Implementation Across Industries
							</p>
						</>
					}
				/>
				<br />
				<ServicePage />
			</div>
		</SectionContainer>
	);
};

export default Page;
