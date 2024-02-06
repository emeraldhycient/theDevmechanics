import React from "react";

type SvgIconProps = {
	className?: string;
	width?: string;
	height?: string;
	stroke?: string;
};

const MoneyIcon: React.FC<SvgIconProps> = ({
	className = "",
	width = "24",
	height = "24",
	stroke = "#fff",
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
				d="M17 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v7c0 3.5-2 5-5 5Z"
				stroke={stroke}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM8.5 6H7a2.5 2.5 0 0 0-2.5 2.5V10m11-4H17a2.5 2.5 0 0 1 2.5 2.5V10m-11 8H7a2.5 2.5 0 0 1-2.5-2.5V14m11 4H17a2.5 2.5 0 0 0 2.5-2.5V14"
				stroke={stroke}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default MoneyIcon;
