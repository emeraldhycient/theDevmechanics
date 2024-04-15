import React from "react";
import ParallaxCharacter from "./parallax-character";
import { motion, useScroll, useSpring } from "framer-motion";

const ParallaxContainer = ({
	text,
	parallaxCharacterElement,
	child,
	className,
	parallaxContainerClassName,
}: {
	text: string;
	child?: React.ReactNode;
	parallaxCharacterElement?: React.MutableRefObject<HTMLDivElement[]>;
	className?: string;
	parallaxContainerClassName?: string;
}) => {
	const characters = text.split(" ");
	const { scrollYProgress, scrollY } = useScroll();
	const y = useSpring(scrollY);

	return (
		<motion.div
			// // style={{ y: -y }}
			// initial={{ opacity: 0 }}
			className={`flex flex-row flex-wrap items-center gap-x-[0.800rem] ${parallaxContainerClassName}`}>
			{characters.map((character, index) => (
				<div className="overflow-y-hidden" key={index}>
					<ParallaxCharacter
						index={index}
						child={character}
						className={` flex flex-col items-center justify-center ${className}`}
						parallaxCharacterElement={parallaxCharacterElement}
					/>
				</div>
			))}
			{child}
		</motion.div>
	);
};

export default ParallaxContainer;
