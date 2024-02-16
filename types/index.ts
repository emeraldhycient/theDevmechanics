export type BlogApiResponse = {
	data: BlogData[];
	meta: {
		pagination: PaginationInfo;
	};
};
export type ProjectApiResponse = {
	data: ProjectData[];
	meta: {
		pagination: PaginationInfo;
	};
};

export type TestimonialApiResponse = { data: TestimonialData[] };

export type EmployeeApiResponse = { data: EmployeeData[] };
export type EmployeeCommentApiResponse = { data: CommentData[] };

interface CommentAttributes {
	id: number;
	comment: string;
	rating: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	employee: EmployeeData;
}

interface CommentData {
	id: number;
	attributes: CommentAttributes;
}

interface EmployeeAttributes {
	name: string;
	linkedin: string;
	role: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	email: string;
	employeeId: string;
	gender: string;
	instagram: string;
	twitter: string;
	image:
		| {
				data: null;
		  }
		| ImageData;
}

interface EmployeeData {
	id: number;
	attributes: EmployeeAttributes;
}

interface TestimonialData {
	id: number;
	attributes: TestimonialAttributes;
}

interface ProjectData {
	attributes: ProjectAttributes;
}

export type BlogIdApiResponse = { data: BlogData };

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
		description: string;
		image: ImageData;
		tags: TagData;
		author: AuthorData;
		category: CategoryData;
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

interface ImageFormat {
	ext: string;
	url: string;
	hash: string;
	mime: string;
	name: string;
	path: string | null;
	size: number;
	width: number;
	height: number;
}

interface ImageAttributes {
	id: number;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		small: ImageFormat;
		medium: ImageFormat;
		thumbnail: ImageFormat;
	};
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: any; // Update this type as per your provider metadata structure
	createdAt: string;
	updatedAt: string;
}

interface ImageData {
	id?: number;
	data: {
		attributes: ImageAttributes;
	};
}

interface TagAttributes {
	id: number;
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface TagData {
	data: {
		attributes: TagAttributes;
	}[];
}

interface CategoryAttributes {
	id: number;
	title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface CategoryData {
	data: {
		attributes: CategoryAttributes;
	};
}

interface AuthorAttributes {
	id: number;
	firstname: string;
	lastname: string;
	username: string;
	preferedLanguage: string | null;
	createdAt: string;
	updatedAt: string;
}

interface AuthorData {
	data: {
		attributes: AuthorAttributes;
	};
}

interface BlogResponse {
	image: ImageData;
	tags: TagData;
	category: CategoryData;
	author: AuthorData;
}

interface ProjectAttributes {
	id: number;
	name: string;
	link: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	solution: string;
	description: string;
	image: {
		data: {
			attributes: ImageAttributes;
		};
	};
}
interface TestimonialAttributes {
	rating: number;
	comment: string;
	name: string;
	position: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	company: string;
	Image: {
		data: {
			id: number;
			attributes: ImageAttributes;
		};
	};
}
