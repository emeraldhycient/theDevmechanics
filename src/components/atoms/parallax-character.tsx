import React from "react";

type Props = {
	index: number;
	child: string;
	className: string;
	parallaxCharacterElement?: React.MutableRefObject<HTMLDivElement[]>;
};

const ParallaxCharacter = (props: Props) => {
	return (
		<div
			ref={(element: HTMLDivElement) => {
				props.parallaxCharacterElement?.current?.push(element);
			}}
			className={` ${props.className}`}>
			<p>{props.child}</p>
		</div>
	);
};

export default ParallaxCharacter;
