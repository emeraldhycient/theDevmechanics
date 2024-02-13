import React from "react";
import "../../app/styles/globals.scss";
type Props = {};

const PageLoader = ({ isLoading }: { isLoading?: boolean }) => {
	return (
		<div
			className={`border bg-white ${isLoading ? "fixed z-[999999999] " : "hidden"} top-0 left-0 w-screen h-screen flex flex-row items-center justify-center ease-out duration-300`}>
			<div className="three-body">
				<div className="three-body__dot"></div>
				<div className="three-body__dot"></div>
				<div className="three-body__dot"></div>
			</div>
		</div>
	);
};

export default PageLoader;
