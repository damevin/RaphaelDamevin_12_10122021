import "./Sidebar.scss";
import { ReactComponent as BikingPicto } from "./pictos/bike.svg";
import { ReactComponent as BodybuildingPicto } from "./pictos/bodybuilding.svg";
import { ReactComponent as SwimingPicto } from "./pictos/swim.svg";
import { ReactComponent as YogaPicto } from "./pictos/yoga.svg";
import React from "react";

export default function Sidebar() {
	return (
		<nav className="sidebar">
			<aside className="sidebar__navigation">
				<YogaPicto className="sidebar__navigation__item" />
				<SwimingPicto className="sidebar__navigation__item" />
				<BodybuildingPicto className="sidebar__navigation__item" />
				<BikingPicto className="sidebar__navigation__item" />
			</aside>
			<footer className="sidebar__copyright">Copyright, SportSee 2020</footer>
		</nav>
	);
}
