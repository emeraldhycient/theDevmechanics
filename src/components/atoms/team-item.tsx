import React from "react";
import LinkedIn from "../../../public/icons/linked-in";
import Link from "next/link";
import ImageBlock from "./image-block";

type Props = {};

const TeamItem = (props: Props) => {
	return (
		<div className="w-full flex flex-col gap-4">
			<ImageBlock
				src="/images/preview.png"
				alt="project-image"
			/>

			<div className="justify-between items-center flex">
				<div className="flex-col justify-center items-start gap-2 flex">
					<div className="text-neutral-900 text-base font-medium">
						Hycient Igweze
					</div>
					<div className="text-neutral-400 text-xs font-normal">
						FOUNDER & CEO
					</div>
				</div>
				<div className="rounded-full flex flex-col items-center justify-center w-[30px] h-[30px] relative border bg-neutral-900">
					<a
						className="relative flex flex-row items-center justify-center w-full h-full align-middle"
						href="http://"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedIn
							width="15"
							height="15"
							className="flex flex-row items-center justify-center "
						/>
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamItem;
