"use client";

import Links from "@/json/nav.json";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoReorderTwoOutline } from "react-icons/io5";
import { elementObserver } from "../../../hooks";
import gsap from "gsap";

const Header = (): React.ReactNode => {
	const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
	const headerRefElement = useRef<HTMLDivElement>(null);

	const animateHeaderSubContainer = () => {
		gsap.fromTo(
			".header-sub-container",
			{ yPercent: -150, opacity: 0.3 },
			{ yPercent: 0, duration: 1.5, ease: "sine.out", opacity: 1 },
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
					<nav className="hidden xl:flex">
						<ul className={`text-sm flex items-center gap-x-10`}>
							{Links.map((link, index) => (
								<li key={index}>
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
				<div className="flex flex-row items-center gap-x-2">
					<button
						className={`xl:hidden block text-3xl`}
						onClick={() => {
							setMobileNavOpen(!mobileNavOpen);
						}}>
						<IoReorderTwoOutline />
					</button>
					<div
						className={`hidden md:flex [&_button]:text-sm gap-x-3 [&_button]:rounded-full [&_button]:py-3 [&_button]:px-5`}>
						<button>Get a Quote</button>

						<Link href={"/contact"}>
							<button className={`bg-[#9743FF] text-white`}>
								Contact Us
							</button>
						</Link>
					</div>
				</div>

				<div
					onClick={() => setMobileNavOpen(!mobileNavOpen)}
					className={`bg-white w-full overflow-hidden ${!mobileNavOpen ? "-translate-[100%] py-0 h-0" : "translate-[120%] py-4 h-[100vh]"} absolute top-14 left-0 duration-300 px-4`}>
					<nav>
						<ul
							className={`flex flex-col gap-y-4 w-full [&_li]:text-xl`}>
							{Links.map((link, index) => (
								<li key={index}>
									<Link href={link.href}>
										<p
											className={`py-2 flex w-full items-center justify-between`}>
											{link.name}

											<span
												className={`text-xl text-[#9FA4A6]`}>
												<GoArrowRight />
											</span>
										</p>
									</Link>
								</li>
							))}
						</ul>
						<div
							className={`w-full flex md:hidden items-center justify-center mt-5 [&_button]:text-sm gap-x-3 [&_button]:rounded-full [&_button]:py-3 [&_button]:px-5`}>
							<button>Get a Quote</button>

							<Link href={"/contact"}>
								<button className={`bg-[#9743FF] text-white`}>
									Contact Us
								</button>
							</Link>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Header;
