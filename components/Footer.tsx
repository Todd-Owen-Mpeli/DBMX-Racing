// Imports
import Link from "next/link";
import Image from "next/image";
import {useGlobalContext} from "@/context/Global";

// Components
import NavbarMenuLinks from "./Elements/NavbarMenuLinks";

const Footer = () => {
	const globalContext = useGlobalContext();

	return (
		<>
			<div className="border-t-[5px] bg-pureBlack border-red">
				<div className="container flex flex-col px-0 mx-auto gap-y-10">
					<div className="flex flex-col items-start justify-between px-8 py-10 text-center lg:px-4 sm:items-end sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:text-left gap-y-20">
						<div className="flex flex-col items-baseline justify-center gap-8 sm:items-center sm:flex-row">
							<Link
								className="mr-auto text-3xl font-bold leading-none"
								href="/"
							>
								<Image
									height={500}
									width={500}
									alt="DBMX Racing"
									src="/img/logos/DBMX Racing logo.jpg"
									className="object-contain object-center w-full h-[50px]"
								/>
							</Link>
							<Image
								height={500}
								width={500}
								alt="DBMX Racing FSB Certification"
								src="https://mydummysite.co.uk/ToddLearningTwo/wp-content/uploads/2023/04/fsb-148w.jpg"
								className="object-contain object-center w-full h-[75px]"
							/>
						</div>
						<ul className="flex flex-col items-start justify-center gap-4 sm:items-center lg:flex-row">
							{globalContext?.footerMenuLinks?.footerMenuLinks?.length > 0 ? (
								globalContext?.footerMenuLinks?.footerMenuLinks?.map(
									(item: any, keys: any) => (
										<li key={keys} className="mb-1 text-center w-max">
											<NavbarMenuLinks
												url={item?.node?.url}
												label={item?.node?.label}
												tailwindStyling="block py-0 lg:py-4 text-base tracking-[.15rem] uppercase font-semibold text-white hover:text-red"
											/>
										</li>
									)
								)
							) : (
								<></>
							)}
						</ul>
						<div className="flex flex-col items-baseline gap-4 lg:items-end">
							<div className="flex flex-col justify-center gap-2">
								<span className="flex items-center gap-2 text-goldPrime">
									Tel:
									<Link
										className="text-base leading-none transition-all duration-500 ease-in-out text-goldPrime hover:text-red"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumber}`}
									>
										{globalContext?.themesOptionsContent?.phoneNumber}
									</Link>
								</span>
								<span className="flex items-center gap-2 text-goldPrime">
									Tel:
									<Link
										className="text-base leading-none transition-all duration-500 ease-in-out text-goldPrime hover:text-red"
										href={`tel:${globalContext?.themesOptionsContent?.phoneNumberTwo}`}
									>
										{globalContext?.themesOptionsContent?.phoneNumberTwo}
									</Link>
								</span>
								<span className="flex items-center gap-2 text-goldPrime">
									Email:
									<Link
										className="text-base leading-none transition-all duration-500 ease-in-out text-goldPrime hover:text-red"
										href={`mailto:${globalContext?.themesOptionsContent?.email}`}
									>
										{globalContext?.themesOptionsContent?.email}
									</Link>
								</span>
							</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center gap-4 py-4 mx-auto bg-black sm:flex-row sm:mx-0">
					<Link
						href={`/terms-of-use`}
						className="mx-2 tracking-widest text-white transition-all duration-500 ease-in-out text-tiny hover:text-darkRed"
					>
						Terms &amp; of Use
					</Link>
					<Link
						href={`/privacy-cookie-policy`}
						className="mx-2 tracking-widest text-white transition-all duration-500 ease-in-out text-tiny hover:text-darkRed"
					>
						Privacy & Cookies Policy
					</Link>
				</div>
				<div className="p-6 lg:p-2 bg-goldPrimeDarker">
					<div className="container flex flex-col-reverse items-center justify-center px-0 mx-auto gap-y-8 lg:flex-row lg:justify-between">
						<p className="max-w-2xl py-2 text-left text-white text-tiny">
							{globalContext?.themesOptionsContent?.copyrightText}
						</p>
						<div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
							<div className="flex items-center justify-start gap-4 text-center">
								<Link
									className="inline-block px-1 text-green"
									href={globalContext?.themesOptionsContent?.facebookLink}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#dfc695",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M512,257.555c0,-141.385 -114.615,-256 -256,-256c-141.385,0 -256,114.615 -256,256c0,127.777 93.616,233.685 216,252.89l0,-178.89l-65,0l0,-74l65,0l0,-56.4c0,-64.16 38.219,-99.6 96.695,-99.6c28.009,0 57.305,5 57.305,5l0,63l-32.281,0c-31.801,0 -41.719,19.733 -41.719,39.978l0,48.022l71,0l-11.35,74l-59.65,0l0,178.89c122.385,-19.205 216,-125.113 216,-252.89Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									className="inline-block px-1 text-green"
									href={globalContext?.themesOptionsContent?.twitterLink}
								>
									<svg
										height="100%"
										className="w-5 h-5"
										style={{
											fill: "#dfc695",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										width="100%"
									>
										<path
											d="M161.014,464.013c193.208,0 298.885,-160.071 298.885,-298.885c0,-4.546 0,-9.072 -0.307,-13.578c20.558,-14.871 38.305,-33.282 52.408,-54.374c-19.171,8.495 -39.51,14.065 -60.334,16.527c21.924,-13.124 38.343,-33.782 46.182,-58.102c-20.619,12.235 -43.18,20.859 -66.703,25.498c-19.862,-21.121 -47.602,-33.112 -76.593,-33.112c-57.682,0 -105.145,47.464 -105.145,105.144c0,8.002 0.914,15.979 2.722,23.773c-84.418,-4.231 -163.18,-44.161 -216.494,-109.752c-27.724,47.726 -13.379,109.576 32.522,140.226c-16.715,-0.495 -33.071,-5.005 -47.677,-13.148l0,1.331c0.014,49.814 35.447,93.111 84.275,102.974c-15.464,4.217 -31.693,4.833 -47.431,1.802c13.727,42.685 53.311,72.108 98.14,72.95c-37.19,29.227 -83.157,45.103 -130.458,45.056c-8.358,-0.016 -16.708,-0.522 -25.006,-1.516c48.034,30.825 103.94,47.18 161.014,47.104"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
								<Link
									className="inline-block px-1 text-green"
									href={globalContext?.themesOptionsContent?.linkedinLink}
								>
									<svg
										height="100%"
										style={{
											fill: "#dfc695",
											fillRule: "evenodd",
											clipRule: "evenodd",
											strokeLinejoin: "round",
											strokeMiterlimit: "2",
										}}
										version="1.1"
										viewBox="0 0 512 512"
										className="w-5 h-5"
										width="100%"
									>
										<path
											d="M473.305,-1.353c20.88,0 37.885,16.533 37.885,36.926l0,438.251c0,20.393 -17.005,36.954 -37.885,36.954l-436.459,0c-20.839,0 -37.773,-16.561 -37.773,-36.954l0,-438.251c0,-20.393 16.934,-36.926 37.773,-36.926l436.459,0Zm-37.829,436.389l0,-134.034c0,-65.822 -14.212,-116.427 -91.12,-116.427c-36.955,0 -61.739,20.263 -71.867,39.476l-1.04,0l0,-33.411l-72.811,0l0,244.396l75.866,0l0,-120.878c0,-31.883 6.031,-62.773 45.554,-62.773c38.981,0 39.468,36.461 39.468,64.802l0,118.849l75.95,0Zm-284.489,-244.396l-76.034,0l0,244.396l76.034,0l0,-244.396Zm-37.997,-121.489c-24.395,0 -44.066,19.735 -44.066,44.047c0,24.318 19.671,44.052 44.066,44.052c24.299,0 44.026,-19.734 44.026,-44.052c0,-24.312 -19.727,-44.047 -44.026,-44.047Z"
											style={{fillRule: "nonzero"}}
										/>
									</svg>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Footer;
