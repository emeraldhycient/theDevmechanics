import React from 'react';

type SvgIconProps = {
  className?: string;
  width?: string;
  height?: string;
}

const SliderArrowIcon: React.FC<SvgIconProps> = ({
  className = '',
  width = '24',
  height = '24',
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
				d="M8.91016 19.9201L15.4302 13.4001C16.2002 12.6301 16.2002 11.3701 15.4302 10.6001L8.91016 4.08008"
				stroke="white"
				strokeWidth="1.5"
				strokeMiterlimit="10"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
  );
}
export default SliderArrowIcon

