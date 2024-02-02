import React from 'react';

type SvgIconProps = {
    className?: string;
    width?: string;
    height?: string;
    fill?: string;
    empty?: boolean;
}

const StarIcon: React.FC<SvgIconProps> = ({
    className = '',
    width = '24',
    height = '24',
    fill = "#fff",
    empty=false,
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
				d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
				fill={fill}
				stroke-width="1"
				stroke-linecap={empty && "round"}
				stroke-linejoin={empty && "round"}
			/>
		</svg>
	);
}
export default StarIcon