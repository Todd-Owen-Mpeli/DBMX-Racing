// Imports
import {FC} from "react";
import {ILayout} from "@/types/components/index";

// Components
import Navbar from "../Global/Navbar";
import MetaTag from "@/components/Meta/MetaTag";

const Layout: FC<ILayout> = ({children}) => {
	return (
		<>
			<MetaTag />

			<Navbar />

			<>{children}</>
		</>
	);
};

export default Layout;
