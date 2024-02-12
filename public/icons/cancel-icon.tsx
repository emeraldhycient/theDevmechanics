import React from "react";

type SvgIconProps = {
	className?: string;
	width?: string;
	height?: string;
	fill?: string;
};

const CancelIcon: React.FC<SvgIconProps> = ({
	className = "",
	width = "27",
	height = "27",
	fill = "#fff",
	...props
}: SvgIconProps) => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox={`0 0 ${width} ${height}`}
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<path
				d="M20.25 14.344H6.75c-0.461 0 -0.844 -0.383 -0.844 -0.844s0.383 -0.844 0.844 -0.844h13.5c0.461 0 0.844 0.383 0.844 0.844s-0.383 0.844 -0.844 0.844Z"
				fill={fill}
			/>
			<path
				d="M13.5 21.094c-0.461 0 -0.844 -0.383 -0.844 -0.844V6.75c0 -0.461 0.383 -0.844 0.844 -0.844s0.844 0.383 0.844 0.844v13.5c0 0.461 -0.383 0.844 -0.844 0.844Z"
				fill={fill}
			/>
		</svg>
	);
};
export default CancelIcon;
