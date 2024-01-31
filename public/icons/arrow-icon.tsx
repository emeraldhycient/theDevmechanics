import React from 'react';

type SvgIconProps = {
    className?: string;
    width?: string;
    height?: string;
    stroke?: string;
}

const ArrowIcon: React.FC<SvgIconProps> = ({
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
			{...props}
		>
			<path
				d="M14.43 5.93 20.5 12l-6.07 6.07M3.5 12h16.83"
				// stroke={stroke}
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
export default ArrowIcon