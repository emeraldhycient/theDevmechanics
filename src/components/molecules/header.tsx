"use client";

import Links from "@/json/nav.json";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoReorderTwoOutline } from "react-icons/io5";
import { elementObserver } from "../../../hooks";
import Navigation from "../atoms/navigation";

const Header = (): React.ReactNode => {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const headerRefElement = useRef<HTMLDivElement>(null);
	const pathname = usePathname();

	console.log("router ==>", pathname);

	const animateHeaderSubContainer = () => {
		gsap.fromTo(
			".header-sub-container",
			{ yPercent: -150, opacity: 0.3 },
			{ yPercent: 0, duration: 1, ease: "sine.out", opacity: 1 },
		);
	};

	useEffect(() => {
		elementObserver(headerRefElement.current, (entry, observer) => {
			if (entry.isIntersecting) {
				animateHeaderSubContainer();
			}
			observer.unobserve(entry.target);
		});
	}, []);

	return (
		<div
			ref={headerRefElement}
			className={` duration-200 py-4 sticky overflow-y-hidden top-0 left-0 text-sm z-[99999999] bg-white`}>
			<div className="opacity-0 header-sub-container w-11/12 md:w-10/12 mx-auto flex items-center justify-between">
				<Link href={"/"}>
					<Image
						src={`/images/logo.svg`}
						alt="Logo"
						width={142}
						height={14.8}
						className={`w-[10rem]`}
					/>
				</Link>

				<div className={`flex items-center gap-x-24`}>
					<nav className="hidden ls:flex">
						<ul className={`text-sm flex items-center gap-x-10`}>
							{Links.map((link, index) => (
								<li
									className={`relative ${pathname.includes(link.href) && " before:content-[''] before:absolute before:w-full before:h-[0.1rem] before:bg-[#9743FF] before:rounded-full before:-bottom-1.5 before:left-1/2 before:-translate-x-1/2 before:animate-pulse before:ease-in-out before:duration-300"}`}
									key={index}>
									<Link
										className="header-link p-0.5 flex flex-row items-center justify-center"
										href={link.href}>
										<p>{link.name}</p>
									</Link>
								</li>
							))}
						</ul>
					</nav>
				</div>
				<div className="flex flex-row items-center gap-x-8">
					<button
						className={`ls:hidden block text-3xl`}
						onClick={() => {
							setMobileNavOpen(!mobileNavOpen);
						}}>
						<IoReorderTwoOutline />
					</button>
					<div
						className={`hidden md:flex [&_button]:text-sm gap-x-3 [&_button]:rounded-full [&_button]:py-3 [&_button]:px-5`}>
						<Link href={"/contact"}>
							<button className={`bg-[#9743FF] text-white`}>
								Contact Us
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div
				onClick={() => setMobileNavOpen(!mobileNavOpen)}
				className={` bg-white w-full overflow-hidden ${!mobileNavOpen ? "-translate-[100%] py-0 h-0" : "translate-[120%] py-4 h-screen"} sticky top-14 left-0 duration-300 px-4`}>
				<Navigation
					links={Links}
					liClassName=""
					navClassName=""
					ulClassName="flex flex-col gap-y-4 w-full [&_li]:text-xl "
					linkChildContainerClassName="py-2 flex w-full items-center justify-between"
					child={
						<span className={`text-xl text-[#9FA4A6]`}>
							<GoArrowRight />
						</span>
					}
				/>
			</div>
		</div>
	);
};

export default Header;
