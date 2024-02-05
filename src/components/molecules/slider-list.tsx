import React from "react";
import { WindowSize, calculateWidth } from "../../../hooks";

const SliderList = (props: any) => {
	const { cursor, ...rest } = props;

	const width = WindowSize();

	const translateX =
		cursor.toFixed(13) * calculateWidth(width, 880, 450, 356);

	return (
		<>
			<div className={`flex flex-row overflow-x-hidden touch-pan-y`}>
				<div
					className={`flex flex-row w-full`}
					style={{
						transform: `translate3d(${translateX}px, 0, 0)`,
					}}
					{...rest}></div>
			</div>
		</>
	);
};

export default SliderList;
