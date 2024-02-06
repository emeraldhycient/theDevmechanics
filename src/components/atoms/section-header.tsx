import React from "react";

type Props = {
	className?: string;
	headerClassName?: string;
	subHeaderClassName?: string;
	headerText?: string;
	subHeaderText?: string;
};

const SectionHeader = ({
	className,
	headerClassName,
	headerText,
	subHeaderClassName,
	subHeaderText,
}: Props) => {
	return (
		<div
			className={`flex-col items-start gap-y-4 inline-flex ${className}`}>
			<div
				className={`text-neutral-900 text-base font-normal capitalize leading-loose ${headerClassName}`}>
				<p>{headerText}</p>
			</div>
			<div
				className={` text-neutral-900 font-bold text-3xl md:text-4xl leading-[3rem] md:leading-[3.7rem] w-full ${subHeaderClassName}`}>
				<p>{subHeaderText}</p>
			</div>
		</div>
	);
};

export default SectionHeader;
