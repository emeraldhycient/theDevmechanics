import React from "react";
import ImageBlock from "../atoms/image-block";
import SocialIcons from "./social_icons";

type Props = {
	imageSrc?: string;
	imageAlt?: string;
	imageClassName?: string;
	username: string;
	containerClassName?: string;
	linkedin?: string;
	twitter?: string;
	instagram?: string;
};

const BlogAuthor = ({
	imageAlt,
	imageSrc,
	imageClassName,
	username,
	containerClassName,
	instagram,
	linkedin,
	twitter,
}: Props) => {
	return (
		<div className={`flex  ${containerClassName}`}>
			<div className="flex flex-row items-center gap-x-3">
				<ImageBlock
					className={`!w-14 !h-14 rounded-full ${imageClassName}`}
					src={`${imageSrc ?? "/images/placeholder.jpg"}`}
					alt={`${imageAlt ?? ""}`}
				/>

				<div className="flex flex-col items-start justify-start gap-y-1">
					<div className="flex flex-row items-center text-sm ">
						by, <p className="font-semibold ml-1">{username}</p>
					</div>
					<div className="text-sm capitalize">
						<p>Author</p>
					</div>
				</div>
			</div>

			<SocialIcons
				containerClassName="!gap-x-3"
				iconData={[
					{
						icon: "/icons/IG.svg",
						link: `${instagram}`,
					},
					{
						icon: "/icons/linkedin.svg",
						link: `${linkedin}`,
					},
					{
						icon: "/icons/twitter.svg",
						link: `${twitter}`,
					},
				]}
			/>
		</div>
	);
};

export default BlogAuthor;
