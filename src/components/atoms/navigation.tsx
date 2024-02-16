import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const Navigation = ({
	links,
	ulClassName,
	navClassName,
	liClassName,
	child,
	linkChildContainerClassName,
}: {
	links: { name?: string; href: string }[];
	ulClassName?: string;
	navClassName?: string;
	liClassName?: string;
	child?: React.ReactNode;
	linkChildContainerClassName?: string;
}) => {
	return (
		<nav className={`${navClassName}`}>
			<ul className={`${ulClassName}`}>
				{links.map((link, index) => (
					<li className={`${liClassName}`} key={index}>
						<Link href={link.href}>
							{child ? (
								<div
									className={` ${linkChildContainerClassName}`}>
									<p>{link.name}</p>

									{child}
								</div>
							) : (
								<p>{link.name}</p>
							)}
						</Link>
					</li>
				))}
			</ul>

			<div
				className={`flex mt-5 [&_button]:text-sm gap-x-3 [&_button]:rounded-full [&_button]:py-3 [&_button]:px-5`}>
				<Link href={"/contact"}>
					<button className={`bg-[#9743FF] text-white`}>
						Contact Us
					</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navigation;
