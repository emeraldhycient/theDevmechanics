export type BlogApiResponse = {
	data: BlogData[];
	meta: PaginationApiResponse;
};
export type ProjectApiResponse = {
	data: ProjectData[];
	meta: PaginationApiResponse;
};
export type TestimonialApiResponse = {
	data: TestimonialData[];
	meta: PaginationApiResponse;
};
export type EmployeeApiResponse = {
	data: EmployeeData[];
	meta: PaginationApiResponse;
};
export type EmployeeCommentApiResponse = {
	data: CommentData[];
	meta: PaginationApiResponse;
};
export type PaginationApiResponse = { pagination: PaginationInfo };

export type UserPermissionType = {
	data: {
		attributes: {
			blocked: boolean;
			confirmed: boolean;
			createdAt: string;
			email: string;
			instagram: string;
			linkedin: string;
			provider: string;
			twitter: string;
			updatedAt: string;
			username: string;
		};
	};
};

interface CommentAttributes {
	id: number;
	comment: string;
	rating: number;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	employee: { data: EmployeeData };
}

interface CommentData {
	id: number;
	attributes: CommentAttributes;
}

export interface EmployeeGender {
	data: EmployeeGenderData;
}

export interface EmployeeGenderData {
	id: number;
	attributes: Attributes;
}

export interface Attributes {
	name: string;
	gender_id: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface EmployeeAttributes {
	full_name: string;
	linkdin: string;
	job_title: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	email: string;
	employeeId: string;
	instagram: string;
	twitter: string;
	employee_gender: EmployeeGender;
	image: {
		data: {
			attributes: ImageAttributes;
		};
	};
}

export interface EmployeeData {
	id: number;
	attributes: EmployeeAttributes;
}

interface TestimonialData {
	id: number;
	attributes: TestimonialAttributes;
}

interface ProjectData {
	id: number;
	attributes: ProjectAttributes;
}

export type BlogIdApiResponse = { data: BlogData };

export type BlogData = {
	id: number;
	attributes: {
		title: string;
		new_content: any[];
		old_content: string;
		date_created: string;
		blog_id: number;
		createdAt: string;
		updatedAt: string;
		publishedAt: string;
		description: string;
		image: ImageData;
		blog_tags: TagData;
		author: AuthorData;
		blog_categories: CategoryData;
		users_permissions_user: UserPermissionType;
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
	name: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

interface CategoryData {
	data: {
		attributes: CategoryAttributes;
	}[];
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
	project_id: number;
	title: string;
	link: string;
	type: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	motto: string;
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
	role: string;
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
