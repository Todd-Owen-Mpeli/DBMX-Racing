// Imports
import {motion} from "framer-motion";
import type {NextPage, GetStaticProps} from "next";
import {ContentContext, IContentContext} from "@/context/context";

// Queries Functions
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "@/functions/graphql/Queries/GetAllMenuLinks";
import {getAllBlogsContent} from "@/functions/graphql/Queries/GetAllBlogPostsSlugs";
import {getAllSeoPagesContent} from "@/functions/graphql/Queries/GetAllSeoContent";
import {getThemesOptionsContent} from "@/functions/graphql/Queries/GetAllThemesOptions";
import {getContentSliderBlogPostsPostsContent} from "@/functions/graphql/Queries/GetAllContentSliderPosts";
import {getAllPagesFlexibleContentComponents} from "@/functions/graphql/Queries/GetAllFlexibleContentComponents";

// Components
import Layout from "@/components/Layout/Layout";
import RenderFlexibleContent from "@/components/FlexibleContent/RenderFlexibleContent";

const Home: NextPage<IContentContext> = ({
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

export const getStaticProps: GetStaticProps = async () => {
	const postTypeFlexiblecontent: string =
		"DefaultTemplate_Flexiblecontent_FlexibleContent";

	// Fetch priority content
	const seoContent: any = await getAllSeoPagesContent("Home");

	const flexibleContentComponents: any =
		await getAllPagesFlexibleContentComponents("Home");

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
		revalidate: 60,
	};
};

export default Home;
