import { Link } from "react-router-dom";

import { Linear } from "@/assets";

import "./Logo.css";

function Logo() {
	return (
		<Link className="logo" to={"/"}>
			<img src={Linear} alt="Logo" />
			<span>A2 Dictionary</span>
		</Link>
	);
}

export default Logo;
