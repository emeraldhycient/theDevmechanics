import React from "react";

type Props = {
	className?: string;
	containerClassName?: string;
	children: React.ReactNode;
};

const SectionContainer = ({
	className,
	containerClassName,
	children,
}: Props) => {
	return (
		<div className={`pt-24 pb-20 relative ${containerClassName}`}>
			<div className={`w-11/12 md:w-10/12 mx-auto ${className}`}>
				{children}
			</div>
		</div>
	);
};

export default SectionContainer;
