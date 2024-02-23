import React from "react";

type SvgIconProps = {
	className?: string;
	width?: string;
	height?: string;
	stroke?: string;
};

const CategoryIcon: React.FC<SvgIconProps> = ({
	className = "",
	width = "24",
	height = "24",
	stroke = "black",
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
			{" "}
			<path
				d="M17 10h2q3 0 3-3V5q0-3-3-3h-2q-3 0-3 3v2q0 3 3 3M5 22h2q3 0 3-3v-2q0-3-3-3H5q-3 0-3 3v2q0 3 3 3m1-12a4 4 0 1 0 0-8 4 4 0 0 0 0 8m12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
				stroke={stroke}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default CategoryIcon;
