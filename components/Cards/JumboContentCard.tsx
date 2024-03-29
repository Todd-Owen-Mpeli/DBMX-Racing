// Imports
import {FC} from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import {IJumboContentCard} from "@/types/components/index";
import Paragraph from ".././Elements/Paragraph";
import {
	fadeIn,
	fadeInUp,
	initial,
	initialTwo,
	stagger,
} from "../../animations/animations";

const JumboContentCard: FC<IJumboContentCard> = ({
	title,
	image,
	subtitle,
	paragraph,
	buttonLink,
	imageLocation,
	backgroundDisplay,
}) => {
	let titleColor;
	let buttonColor;
	let paragraphColor;
	let backgroundColor;
	let backgroundImage;

	switch (backgroundDisplay) {
		case "White":
			titleColor = "text-black";
			buttonColor = "text-black";
			backgroundColor = "bg-white";
			paragraphColor = "text-black";
			backgroundImage = `none`;
			break;
		case "Red":
			titleColor = "text-white";
			buttonColor = "text-white";
			paragraphColor = "text-white";
			backgroundColor = "bg-darkerRedTwo";
			backgroundImage = `url("/svg/blob.svg")`;
			break;
	}

	return (
		<div
			className={`relative py-20 overflow-hidden bg-center bg-no-repeat bg-cover ${backgroundColor}`}
			style={{
				backgroundImage: backgroundImage,
			}}
		>
			<div className="container relative px-0 mx-auto lg:px-4">
				<div
					className={
						imageLocation === "Left"
							? `flex flex-col-reverse items-center gap-6 lg:flex-row`
							: `flex flex-col items-center gap-6 lg:flex-row`
					}
				>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={
							imageLocation === "Left"
								? `block relative w-full px-4 lg:w-1/2`
								: `hidden`
						}
					>
						<Image
							priority={true}
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `block object-cover object-center w-full h-full min-h-[500px] max-h-[500px]`
									: `hidden`
							}
						/>
					</motion.div>
					<div className="w-full px-4 mb-12 lg:w-1/2 lg:mb-0">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="flex flex-col justify-center max-w-2xl ite"
						>
							<motion.span
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className="text-base font-semibold text-center sm:text-left text-goldPrime"
							>
								{subtitle}
							</motion.span>
							<motion.h2
								initial={initial}
								whileInView={fadeInUp}
								viewport={{once: true}}
								className={`mt-2 text-lg sm:text-3xl md:text-4xl text-center sm:text-left font-semibold ${titleColor} lg:pr-8`}
							>
								{title}
							</motion.h2>
							<Paragraph
								content={paragraph}
								tailwindStyling={`w-full lg:max-w-2xl mx-auto mt-4 py-8 ${paragraphColor} text-left text-base`}
							/>
							<Link
								href={buttonLink?.url ? buttonLink?.url : `/`}
								target={buttonLink?.target}
								className="text-center sm:text-left"
							>
								<motion.button
									initial={initial}
									whileInView={fadeInUp}
									viewport={{once: true}}
									className={`text-lg font-medium ${buttonColor} no-underline hover:underline hover:text-red`}
								>
									{buttonLink?.title}
								</motion.button>
							</Link>
						</motion.div>
					</div>
					<motion.div
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className={
							imageLocation === "Right"
								? `block relative w-full px-4 lg:w-1/2`
								: `hidden`
						}
					>
						<Image
							priority={true}
							alt={image?.altText}
							src={image?.sourceUrl}
							width={image?.mediaDetails?.width}
							height={image?.mediaDetails?.height}
							className={
								image?.sourceUrl
									? `block object-cover object-center w-full h-full min-h-[500px] max-h-[500px]`
									: `hidden`
							}
						/>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default JumboContentCard;
