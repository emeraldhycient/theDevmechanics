import React from 'react';

type SvgIconProps = {
    className?: string;
    width?: string;
    height?: string;
    fill?: string;
}

const LinkedIn: React.FC<SvgIconProps> = ({
    className = '',
    width = '24',
    height = '24',
    fill="#fff",
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
				d="M3.542 2.179c-.745 0-1.232.489-1.232 1.131 0 .629.472 1.132 1.203 1.132h.014c.76 0 1.232-.503 1.232-1.132-.014-.642-.472-1.131-1.217-1.131ZM2.44 5.335h2.177v6.55H2.44v-6.55Zm7.518-.152c-1.174 0-1.962 1.103-1.962 1.103v-.95H5.819v6.55h2.177V8.23c0-.196.014-.392.072-.532.157-.39.515-.796 1.117-.796.787 0 1.102.6 1.102 1.481v3.504h2.177V8.131c0-2.012-1.074-2.948-2.506-2.948Z"
				fill={fill}
			/>
		</svg>
	);
}
export default LinkedIn