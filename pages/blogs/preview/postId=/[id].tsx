// Imports
import {isEmpty} from "lodash";
import {motion} from "framer-motion";

import type {GetServerSideProps, NextPage} from "next";
import {getAuthToken} from "@/functions/cookies/cookies";
import {ContentContext, IContentContext} from "@/context/context";
import {getLoginPreviewRedirectUrl} from "@/functions/redirects/redirects";

// Mutations Functions
import {getAllPreviewFlexibleContentComponents} from "@/functions/graphql/Mutations/GetAllPreviewFlexibleContentComponents";
import {getAllPreviewSeoContent} from "@/functions/graphql/Mutations/GetAllPreviewSeoContent";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const dynamicPreviewPosts: NextPage<IContentContext> = ({
	seo,
	blogs,
	content,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
	postTypeFlexiblecontent,
	contentSliderPostsContent,
}) => {
	return (
		<ContentContext.Provider
			value={{
				seo: seo,
				blogs: blogs,
				content: content,
				mainMenuLinks: mainMenuLinks,
				navbarMenuLinks: navbarMenuLinks,
				footerMenuLinks: footerMenuLinks,
				themesOptionsContent: themesOptionsContent,
				postTypeFlexiblecontent: postTypeFlexiblecontent,
				contentSliderPostsContent: contentSliderPostsContent,
			}}
		>
			<motion.div
				exit={{
					opacity: 0,
				}}
				initial="initial"
				animate="animate"
			>
				<Layout>
					<RenderFlexibleContent />
				</Layout>
			</motion.div>
		</ContentContext.Provider>
	);
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
	const authToken: string = getAuthToken(context.req);
	const {params}: any = context || {};
	const postType: string = "post";
	const postTypeFlexiblecontent: string =
		"Post_Flexiblecontent_FlexibleContent";
	const loginRedirectURL: string = getLoginPreviewRedirectUrl(
		postType,
		params?.id
	);

	if (isEmpty(authToken)) {
		return {
			redirect: {
				permanent: false,
				destination: loginRedirectURL || "/login",
				query: {postType, previewPostId: params?.id},
			},
		};
	} else {
		// Fetch priority content
		/* PREVIEW BLOGS POSTS SEO CONTENT */
		const seoContent: any = await getAllPreviewSeoContent(
			params?.id,
			authToken,
			postType,
			loginRedirectURL
		);

		/* PREVIEW BLOGS POSTS FLEXIBLE CONTENT */
		const flexibleContentComponents: any =
			await getAllPreviewFlexibleContentComponents(
				params?.id,
				postType,
				authToken,
				loginRedirectURL,
				postTypeFlexiblecontent
			);

		// Fetch remaining content simultaneously
		const [
			blogs,
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			themesOptionsContent,
			contentSliderPostsContent,
		] = await Promise.all([
			getAllBlogsContent(),
			getMainMenuLinks(),
			getNavbarMenuLinks(),
			getFooterMenuLinks(),
			getThemesOptionsContent(),
			getContentSliderBlogPostsPostsContent(),
		]);

		return {
			props: {
				blogs,
				mainMenuLinks,
				navbarMenuLinks,
				footerMenuLinks,
				seo: seoContent,
				themesOptionsContent,
				postTypeFlexiblecontent,
				contentSliderPostsContent,
				content: flexibleContentComponents?.content,
			},
		};
	}
};

export default dynamicPreviewPosts;
