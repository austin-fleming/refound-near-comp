type AccountId = string;

export type Post = {
	id: number;
	owner: AccountId;
	title: string;
	description: string;
	imageLink: string;
	isVerified: boolean;
};
