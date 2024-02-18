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
			{/* {props?.child === "/" ? (
				<p className="mr-[0.700rem]"></p>
			) : (
				<p>{props.child}</p>
			)} */}
			<p>{props.child}</p>
		</div>
	);
};

export default ParallaxCharacter;
