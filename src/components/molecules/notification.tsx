import React from "react";
import ClapHandsIcon from "../../../public/icons/clap-hands-icon";
import CancelIcon from "../../../public/icons/cancel-icon";

type Props = {
	headerText?: string;
	text?: string;
	className?: string;
	textContainerClassName?: string;
	icon?: React.ReactNode;
	headIcon?: React.ReactNode;
};

const Notification = ({
	headerText,
	text,
	className,
	textContainerClassName,
	icon,
	headIcon,
}: Props) => {
	return (
		<div
			className={`flex flex-row items-center justify-between py-2.5 px-5 bg-[#FDEBE0] rounded-lg ${className}`}>
			<div className="flex flex-row items-center gap-x-4">
				{headIcon ?? <ClapHandsIcon />}
				<div
					className={`flex flex-col gap-y-3${textContainerClassName}`}>
					<div className="text-[1.01125rem] font-medium">
						<p>{headerText}</p>
					</div>
					<div className="text-[0.8125rem] font-medium">
						<p>{text}</p>
					</div>
				</div>
			</div>
			{icon ?? (
				<button
					id="yourCustomButtonId"
					className="flex flex-row items-center justify-center border-none outline-none">
					<CancelIcon
						className="fill-primary-black rotate-45"
						fill="text-primary-black"
					/>
				</button>
			)}
		</div>
	);
};

export default Notification;
