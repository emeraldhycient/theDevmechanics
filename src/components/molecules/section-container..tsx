import React, { RefObject } from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
	containerClassName?: string;
	width?: string;
	refElement?: RefObject<HTMLDivElement>;
};

const SectionContainer = ({
	children,
	className,
	containerClassName,
	width,
	refElement,
}: Props) => {
	const defaultWidth = "w-11/12 md:w-10/12 mx-auto"; // Customize your desired default width

	const containerClasses = ["relative", containerClassName ?? ""];

	const contentClasses = [className ?? "", width ?? defaultWidth];

	return (
		<div ref={refElement} className={containerClasses.join(" ")}>
			<div className={contentClasses.join(" ")}>{children}</div>
		</div>
	);
};

export default SectionContainer;
