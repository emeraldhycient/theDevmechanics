import React from 'react'

type Props = {
    className?: string;
    headerClassName?: string;
    subHeaderClassName?: string;
    headerText?: string;
    subHeaderText?: string;
}

const SectionHeader = ({ className, headerClassName, headerText, subHeaderClassName, subHeaderText}: Props) => {
  return (
		<div
			className={`flex-col items-start gap-y-5 inline-flex ${className}`}
		>
			<div
				className={`text-neutral-900 text-base font-normal capitalize leading-loose ${headerClassName}`}
			>
				<p>{headerText}</p>
			</div>
			<div
				className={` text-neutral-900 font-extrabold leading-[3rem] md:leading-[4rem] lg:leading-[4rem] text-3xl md:text-4xl lg:text-5xl w-full lg:max-w-[70%] ${subHeaderClassName}`}
			>
				<p>{subHeaderText}</p>
			</div>
		</div>
  );
}

export default SectionHeader