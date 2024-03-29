// Imports
import {FC} from "react";
import {motion} from "framer-motion";
import {ILogos} from "@/types/components/index";
import {fadeIn, initial, stagger, initialTwo} from "../animations/animations";

// Components
import LogoCard from "../components/Cards/LogoCard";

const Logos: FC<ILogos> = ({title, logoGrid}) => {
	return (
		<>
			<div className={`py-20 px-4 lg:px-0 bg-white`}>
				<div className="container px-0 mx-auto">
					<motion.h2
						initial={initialTwo}
						whileInView={fadeIn}
						viewport={{once: true}}
						className=" mb-20 text-darkerRed text-center tracking-normal leading-normal sm:leading-[2.75rem] font-semibold text-lg sm:text-3xl md:text-4xl"
					>
						{title}
					</motion.h2>
					<div className="max-w-6xl mx-auto">
						<motion.div
							initial={initial}
							whileInView={stagger}
							viewport={{once: true}}
							className="grid items-center justify-center grid-cols-2 gap-4 lg:grid-cols-6 lg:justify-between"
						>
							{logoGrid?.length > 0 ? (
								logoGrid.map((item: any, keys: any) => (
									<LogoCard key={keys} image={item?.image} />
								))
							) : (
								<></>
							)}
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Logos;
