export type BlogApiResponse = {
	data: BlogData[];
	meta: {
		pagination: PaginationInfo;
	};
};

export type BlogData = {
	id: number;
	attributes: {
		title: string;
		content: BlogContent[];
		date_created: string;
		blog_id: string;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
	};
};

export type BlogContent = {
	type: string;
	children: {
		text: string;
		type: string;
	}[];
};

export type PaginationInfo = {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
};
