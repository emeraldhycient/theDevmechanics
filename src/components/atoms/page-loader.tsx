import React from "react";
import "../../app/styles/globals.scss";
type Props = {};
// border bg-white ${isLoading ? "fixed z-[999999999] " : "hidden"} top-0 left-0 w-screen h-screen flex
const PageLoader = ({
	isLoading,
	className,
}: {
	isLoading?: boolean;
	className?: string;
}) => {
	return (
		<div
			className={`flex-row items-center justify-center ease-out duration-300 ${className}`}>
			<div className="three-body">
				<div className="three-body__dot"></div>
				<div className="three-body__dot"></div>
				<div className="three-body__dot"></div>
			</div>
		</div>
	);
};

export default PageLoader;
