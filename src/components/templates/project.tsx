import Image from "next/image";
import Link from "next/link";
import React from "react";
import ArrowIcon from "../../../public/icons/arrow-icon";

type Props = {};

const Project = (props: Props) => {
	return (
		<div className="pt-24 pb-20">
			<div className="w-11/12 md:w-10/12 mx-auto my-0 ">
				<div className="flex flex-col gap-y-5">
					<div>
						<p>View Our Projects</p>
					</div>
					<div className="leading-[3rem] font-semibold text-3xl md:text-4xl w-full lg:max-w-[50%]">
						<p>
							A testament to our versatility & commitment to
							excellence 🔥
						</p>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row items-center justify-between bg-[#FBF3EF] rounded-2xl px-7 md:px-12 py-9 gap-y-14 mt-20">
					<div className="w-full lg:w-2/4 text-center lg:text-start flex flex-col items-center lg:items-start ">
						<div className="text-sm mb-5">
							<p>Vision Pay</p>
						</div>
						<div className="text-3xl  font-semibold text-[#141515]">
							<p>Empowering Agency Banking</p>
						</div>
						<div className="text-sm my-4 text-[#9FA4A6] leading-loose">
							<p>
								Vision Pay is an innovative agency banking app
								designed to make easy and secure banking
								transactions. Our development focused on
								user-centric design and reliable functionality.
							</p>
						</div>
						<div className="text-base text-[#141515]">
							<p>UI/UX Design, Front & Back End Development</p>
						</div>

						<div>
							<div className="mt-7 md:mt-5 flex flex-col sm:flex-row items-center ml-auto gap-x-3 gap-y-5">
								<Link
									href=""
									id=""
									className="group flex flex-row items-center gap-x-2 text-sm text-white no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-[#9743FF] min-h-fit min-w-fit border border-[#9743FF] 
						hover:text-[#141515] hover:bg-white hover:border-white ease-linear duration-500"
								>
									<span>View Project</span>{" "}
									<span>
										<ArrowIcon className="-rotate-45 w-4 h-4 stroke-white group-hover:stroke-[#141515] ease-linear duration-500" />
									</span>
								</Link>
								<Link
									href=""
									id=""
									className="text-sm text-primary-blue no-underline capitalize px-4 py-2.5 font-medium rounded-full bg-primary-white min-h-fit min-w-fit border border-[#FBF3EF] hover:text-[#9743FF] hover:bg-white hover:border-primary-white ease-linear duration-500"
								>
									Read Case Study
								</Link>
							</div>
						</div>
					</div>

					<div className="relative block">
						<div className="block overflow-hidden relative h-[27rem] w-[20rem] sm:w-[22rem] md:w-[25rem] rounded-lg">
							<img
								src={`/images/preview.png`}
								alt="project-image"
								className="absolute top-0 left-0 object-cover h-[27rem] w-full rounded-lg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
