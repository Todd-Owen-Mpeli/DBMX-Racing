// Import
import {motion} from "framer-motion";
import {getThemesOptionsContent} from "../../lib/themesOptions";
import {
	getMainMenuLinks,
	getNavbarMenuLinks,
	getFooterMenuLinks,
} from "../../lib/MenuLinks";
import {fetchBlogPostsSlugs, fetchBlogPostsContent} from "@/lib/BlogPostsSlugs";

// Components
import Footer from "@/components/Footer";
import MetaTag from "@/components/Meta/MetaTag";
import JumboContent from "@/components/JumboContent";
import ContactBanner from "@/components/ContactBanner";
import TitleParagraph from "@/components/TitleParagraph";
import HeroThree from "@/components/HeroThree";
import BackHoverButton from "@/components/Elements/BackHoverButton";

const singlePost = ({
	seo,
	content,
	pageTitle,
	mainMenuLinks,
	navbarMenuLinks,
	footerMenuLinks,
	themesOptionsContent,
}: any) => {
	return (
		<motion.div
			exit={{
				opacity: 0,
			}}
			initial="initial"
			animate="animate"
		>
			{/* <!--===== META TAG =====--> */}
			<MetaTag title={pageTitle} seo={seo} />

			<main>
				<HeroThree
					title={content?.heroSection?.title}
					email={themesOptionsContent?.email}
					paragraph={content?.heroSection?.paragraph}
					mainMenuLinks={mainMenuLinks?.mainMenuLinks}
					twitterLink={themesOptionsContent?.twitterLink}
					phoneNumber={themesOptionsContent?.phoneNumber}
					linkedinLink={themesOptionsContent?.linkedinLink}
					facebookLink={themesOptionsContent?.facebookLink}
					navbarMenuLinks={navbarMenuLinks?.navbarMenuLinks}
					backgroundImage={content?.heroSection?.backgroundImage}
					backgroundVideoUrl={content?.heroSection?.backgroundVideoUrl}
					backgroundImageOrVideo={content?.heroSection?.backgroundImageOrVideo}
				/>

				<BackHoverButton link={`/blogs`} />

				<TitleParagraph
					title={content?.titleParagraph?.title}
					paragraph={content?.titleParagraph?.paragraph}
				/>

				<JumboContent jumboContentSection={content?.jumboContentSection} />

				<ContactBanner
					title={content?.contactBanner?.title}
					paragraph={content?.contactBanner?.paragraph}
					buttonLink={content?.contactBanner?.buttonLink}
					backgroundImage={content?.contactBanner?.backgroundImage?.sourceUrl}
				/>

				<Footer
					email={themesOptionsContent?.email}
					phoneNumber={themesOptionsContent?.phoneNumber}
					twitterLink={themesOptionsContent?.twitterLink}
					facebookLink={themesOptionsContent?.facebookLink}
					linkedinLink={themesOptionsContent?.linkedinLink}
					footerMenuLinks={footerMenuLinks?.footerMenuLinks}
					copyRightText={themesOptionsContent?.copyrightText}
				/>
			</main>
		</motion.div>
	);
};

export default singlePost;

export async function getStaticPaths() {
	const data = await fetchBlogPostsSlugs();

	const paths = data.map((slugUrl) => ({
		params: {
			slug: slugUrl?.slug as String,
		},
	}));

	return {paths, fallback: false};
}

export async function getStaticProps({params}: any) {
	const response: any = await fetchBlogPostsContent(params?.slug);

	const mainMenuLinks: object = await getMainMenuLinks();
	const navbarMenuLinks: object = await getNavbarMenuLinks();
	const footerMenuLinks: object = await getFooterMenuLinks();
	const themesOptionsContent: object = await getThemesOptionsContent();

	return {
		props: {
			mainMenuLinks,
			navbarMenuLinks,
			footerMenuLinks,
			themesOptionsContent,
			seo: response?.seo,
			content: response?.content,
			pageTitle: response?.pageTitle,
		},
		revalidate: 60,
	};
}