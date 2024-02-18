import React, { RefObject } from "react";

type Props = {
	className?: string;
	headerClassName?: string;
	subHeaderClassName?: string;
	headerText?: string | React.ReactNode;
	subHeaderText?: string | React.ReactNode;
	refElement?: RefObject<HTMLDivElement>;
};

const SectionHeader = ({
	className,
	headerClassName,
	headerText,
	subHeaderClassName,
	subHeaderText,
	refElement,
}: Props) => {
	return (
		<div
			ref={refElement}
			className={`flex-col items-start gap-y-5 flex justify-start ${className}`}>
			<div
				className={`text-neutral-900 text-base font-normal capitalize leading-loose opacity-0 ${headerClassName}`}>
				<p>{headerText}</p>
			</div>
			<div className={`  w-full ${subHeaderClassName}`}>
				<p>{subHeaderText}</p>
			</div>
		</div>
	);
};

export default SectionHeader;
