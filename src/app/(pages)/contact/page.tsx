"use client";
import { SocialIcons } from "@/components/molecules";
import Notification from "@/components/molecules/notification";
import SectionContainer from "@/components/molecules/section-container.";
import Services from "@/json/contact/available_services.json";
import ProjectTypes from "@/json/contact/project_types.json";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import InfoCorrectIcon from "../../../../public/icons/info-correct-icon";
import InfoErrorIcon from "../../../../public/icons/info-error-icon";
import Spinner from "@/components/atoms/spinner";
import gsap from "gsap";

type Inputs = {
	fullName: string;
	email: string;
	idea: string;
};

const Page = (): React.ReactNode => {
	const [services, setServices] = useState<string[]>([]);
	const [projectType, setProjectType] = useState<string[]>([]);
	const [loading, setLoading] = useState(false);
	const projectTypeRefElement = useRef<HTMLButtonElement[]>([]);
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = async (data) => {
		const { email, fullName, idea } = data;
		setLoading(true);
		await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ fullName, email, idea }),
		})
			.then((res) => res.json())
			.then((data) => {
				setLoading(false);
				if (data) {
					toast.custom(
						<Notification
							headIcon={
								<InfoCorrectIcon
									className="stroke-green-500"
									stroke="text-green-500"
								/>
							}
							headerText={`Congrats! Thanks for sending a mail `}
							text="You'd get back to you in no time"
						/>,
						{
							duration: 5000,
							position: "bottom-left",
						},
					);
				} else {
					toast.custom(
						<Notification
							headIcon={
								<InfoErrorIcon
									className="stroke-[red]"
									stroke="red"
								/>
							}
							className="!bg-[hsl(0,83%,55%)]"
							headerText={`Something went wrong`}
							text={"Something went wrong please try again"}
						/>,
						{
							duration: 5000,
							position: "bottom-left",
						},
					);
				}
			})
			.catch((err) => {
				setLoading(false);
				console.log(err);
				toast.custom(
					<Notification
						headIcon={
							<InfoErrorIcon
								className="stroke-[red]"
								stroke="red"
							/>
						}
						className="!bg-[hsl(0,83%,55%)]"
						headerText={`Something went wrong`}
						text={"Ooops! unfortunately some error has occurred."}
					/>,
					{
						duration: 5000,
						position: "bottom-left",
					},
				);
			});
	};

	const addOrRemoveItem = (
		setter: React.Dispatch<React.SetStateAction<string[]>>,
		array: string[],
		item: string,
	) => {
		if (array.includes(item)) {
			let copyArray = [...array];
			let position = copyArray.indexOf(item);
			copyArray.splice(position, 1);

			setter(copyArray);
			return;
		}

		setter((values) => [...values, item]);
	};

	const handleClick = (index: number) => {
		let element: HTMLButtonElement = projectTypeRefElement.current[index];
		gsap.to(element, {
			duration: 0.5,
			ease: "power1.inOut",
			scale: 0.9, // Scale down
			yoyo: true, // Play the animation in reverse
			repeat: 1, // Repeat indefinitely
			backgroundColor: "#9743FF",
		});
	};

	return (
		<SectionContainer containerClassName="">
			<div
				className={`py-14 flex items-start lg:flex-row gap-x-36 gap-y-8 flex-col-reverse`}>
				<div>
					<p className={`text-[#9FA4A6]`}>Send us an email</p>
					<Link href={`mailto:info@devmechanics.com`}>
						<p className={`text-base font-bold`}>
							info@devmechanics.com
						</p>
					</Link>{" "}
					<br />
					<p className={`text-[#9FA4A6] mt-3`}>Follow us</p>
					<SocialIcons />
				</div>

				<section className={`flex-1`}>
					<h1
						className={`font-semibold lg:text-6xl md:text-5xl text-4xl`}>
						Hey! Got a project?
					</h1>
					<br />
					<p className={`mt-4 mb-6`}>Your project&apos;s type</p>
					<div className={`flex gap-x-3 flex-wrap gap-y-5`}>
						{ProjectTypes.map((type, index) => (
							<button
								ref={(element) =>
									projectTypeRefElement.current.push(element!)
								}
								onClick={() => {
									addOrRemoveItem(
										setProjectType,
										projectType,
										type,
									);
									handleClick(index);
								}}
								key={index}
								className={`${projectType.includes(type) ? "text-white" : "bg-[#FCFAFF]"} duration-100 py-2 px-5 rounded-full border`}>
								{type}
							</button>
						))}
					</div>{" "}
					<br />
					<p className={`mt-5 mb-6`}>Services you need</p>
					<div className={`flex gap-x-3 flex-wrap gap-y-5`}>
						{Services.map((service, index) => (
							<button
								onClick={() => {
									addOrRemoveItem(
										setServices,
										services,
										service,
									);
								}}
								key={index}
								className={`${services.includes(service) ? "text-white bg-[#9743FF]" : "bg-[#FCFAFF]"} duration-100 py-2 px-5 rounded-full border`}>
								{service}
							</button>
						))}
					</div>{" "}
					<br /> <br />
					<form
						onSubmit={handleSubmit(onSubmit)}
						className={`flex flex-col gap-y-10`}>
						<div
							className={`flex lg:flex-row md:flex-row flex-col gap-y-7 gap-x-7 w-full`}>
							<div className="w-full">
								<input
									type="text"
									className={`w-full flex-1 text-[#141515] placeholder:text-[#141515] outline-none border-b border-b-[#9FA4A64D] py-4 `}
									placeholder="Full Name"
									{...register("fullName", {
										required: true,
									})}
								/>
								{errors.fullName && (
									<span className="text-sm text-red-700 mt-2">
										Full name is required
									</span>
								)}
							</div>
							<div className="w-full">
								<input
									type="email"
									className={`w-full flex-1 text-[#141515] placeholder:text-[#141515] outline-none border-b border-b-[#9FA4A64D] py-4 `}
									placeholder="Email Address"
									{...register("email", { required: true })}
								/>
								{errors.email && (
									<span className="text-sm text-red-700 mt-2">
										Email is required
									</span>
								)}
							</div>
						</div>

						<div>
							<textarea
								placeholder="Write about your idea"
								className={`min-w-full max-w-full text-[#141515] placeholder:text-[#141515] outline-none border-b border-b-[#9FA4A64D] py-5  min-h-[5rem] max-h-[5rem]`}
								{...register("idea", {
									required: true,
								})}></textarea>
							{errors.idea && (
								<span className="text-sm text-red-700 mt-2">
									Idea is required
								</span>
							)}
						</div>

						<div className={`flex justify-end`}>
							<button
								type="submit"
								className={`text-sm rounded-full py-3.5 px-14 text-white bg-[#9743FF]`}>
								{loading ? (
									<Spinner className="!w-6 !h-6 !stroke-white" />
								) : (
									<div>Submit</div>
								)}
							</button>
						</div>
					</form>
				</section>
			</div>
		</SectionContainer>
	);
};

export default Page;
