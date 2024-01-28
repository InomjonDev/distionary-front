import { Link, useLocation } from "react-router-dom";

import { Home, PlusCircle, User2 } from "lucide-react";

import "./NavigationBar.css";
import { getItem } from "@/components/ui/helpers/storage";

function NavigationBar() {
	const { _id: userId } = getItem("user") || "1";
	const { pathname } = useLocation();
	return (
		<div className="navigation-bar">
			<div className="navigation-bar__wrapper">
				<ul className="navigation-bar__list">
					<li
						className={`navigation-bar__item ${
							pathname === "/" ? "navigation-bar__item-active" : ""
						}`}
					>
						<Link to={"/"}>
							<Home />
						</Link>
					</li>

					<li
						className={`navigation-bar__item ${
							pathname === "/add-word-list" ? "navigation-bar__item-active" : ""
						}`}
					>
						<Link to={"/add-word-list"}>
							<PlusCircle />
						</Link>
					</li>
					<li
						className={`navigation-bar__item ${
							pathname === `/profile/${userId}`
								? "navigation-bar__item-active"
								: ""
						}`}
					>
						<Link to={`/profile/${userId}`}>
							<User2 />
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default NavigationBar;
