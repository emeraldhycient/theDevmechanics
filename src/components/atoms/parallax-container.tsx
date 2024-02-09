import React from "react";
import ParallaxCharacter from "./parallax-character";

const ParallaxContainer = ({
	text,
	parallaxCharacterElement,
	child,
}: {
	text: string;
	child?: React.ReactNode;
	parallaxCharacterElement: React.MutableRefObject<HTMLDivElement[]>;
}) => {
	const characters = text.split(" ");

	return (
		<div className="flex flex-row flex-wrap items-center overflow-y-hidden">
			{characters.map((character, index) => (
				<div className="overflow-y-hidden" key={index}>
					<ParallaxCharacter
						index={index}
						child={character}
						className="hero-main-text-character flex flex-col items-center justify-center"
						parallaxCharacterElement={parallaxCharacterElement}
					/>
				</div>
			))}
			{child}
		</div>
	);
};

export default ParallaxContainer;
