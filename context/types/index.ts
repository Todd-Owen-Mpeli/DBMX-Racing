export type ISeo = {
	canonical: string;
	cornerstone: Boolean;
	focuskw: string;
	fullHead: string;
	metaDesc: string;
	metaKeywords: string;
	metaRobotsNofollow: string;
	metaRobotsNoindex: string;
	opengraphAuthor: string;
	opengraphDescription: string;
	opengraphImage: {
		mediaItemUrl: string;
	};
	opengraphModifiedTime: string;
	opengraphPublishedTime: string;
	opengraphPublisher: string;
	opengraphSiteName: string;
	opengraphTitle: string;
	opengraphType: string;
	opengraphUrl: string;
	readingTime: number;
	title: string;
	twitterDescription: string;
	twitterTitle: string;
	twitterImage: {
		mediaItemUrl: string;
	};
};

export type IContent = [
	{
		content: any;
	}
];

export type IBlogs = [
	{
		node: {
			id: string;
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
			featuredImage: {
				node: {
					altText: string;
					sourceUrl: string;
					mediaDetails: {
						width: number;
						height: number;
					};
				};
			};
		};
	}
];

export type IMainMenuLinks = {
	mainMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
};

export type INavbarMenuLinks = {
	navbarMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
};

export type IFooterMenuLinks = {
	footerMenuLinks: [
		{
			node: {
				id: string;
				url: string;
				label: string;
			};
		}
	];
};

export type IThemesOptionsContent = {
	address: string;
	email: string;
	emailTwo: string;
	phoneNumber: string;
	phoneNumberTwo: string;
	copyrightText: string;
	facebookLink: string;
	linkedinLink: string;
	twitterLink: string;
	businessHours: {
		content: string;
	};
};

export type IPostTypeFlexiblecontent = {
	postTypeFlexiblecontent: string;
};

export type IContentSliderPostsContent = {
	content: [
		{
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							backgroundVideoUrl: string;
							backgroundImageOrVideo: string;
							backgroundImage: {
								altText: string;
								sourceUrl: string;
								mediaDetails: {
									height: number;
									width: number;
								};
							};
						},
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		},
		{
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							backgroundVideoUrl: string;
							backgroundImageOrVideo: string;
							backgroundImage: {
								altText: string;
								sourceUrl: string;
								mediaDetails: {
									height: number;
									width: number;
								};
							};
						},
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		},
		{
			uri: string;
			date: string;
			title: string;
			template: {
				flexibleContent: {
					flexibleContent: [
						{
							fieldGroupName: string;
							backgroundVideoUrl: string;
							backgroundImageOrVideo: string;
							backgroundImage: {
								altText: string;
								sourceUrl: string;
								mediaDetails: {
									height: number;
									width: number;
								};
							};
						},
						{
							fieldGroupName: string;
							paragraph: string;
							title: string;
						}
					];
				};
			};
		}
	];
};
