import React from 'react';

type SvgIconProps = {
    className?: string;
    width?: string;
    height?: string;
    stroke?: string;
}

const LocationIcon: React.FC<SvgIconProps> = ({
    className = '',
    width = '24',
    height = '24',
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
			{" "}
			<path
				d="M12 13.43a3.12 3.12 0 1 0 0-6.24 3.12 3.12 0 0 0 0 6.24Z"
				stroke={stroke}
				stroke-width="1.5"
			/>
			<path
				d="M3.62 8.49c1.97-8.66 14.8-8.65 16.76.01 1.15 5.08-2.01 9.38-4.78 12.04a5.193 5.193 0 0 1-7.21 0c-2.76-2.66-5.92-6.97-4.77-12.05Z"
				stroke={stroke}
				stroke-width="1.5"
			/>
		</svg>
	);
}
export default LocationIcon