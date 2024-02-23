import React from "react";

type Props = { children: React.ReactNode; level: 1 | 2 | 3 | 4 | 5 | 6 };

const BlogHeaderTag = ({ children, level }: Props) => {
	switch (level) {
		case 1:
			return <h1 className="mb-2">{children}</h1>;
		case 2:
			return <h2 className="mb-2">{children}</h2>;
		case 3:
			return <h3 className="mb-2">{children}</h3>;
		case 4:
			return <h4 className="mb-2">{children}</h4>;
		case 5:
			return <h5 className="mb-2">{children}</h5>;
		case 6:
			return <h6 className="mb-2">{children}</h6>;
		default:
			return <p className="mb-2">{children}</p>;
	}
};

export default BlogHeaderTag;
