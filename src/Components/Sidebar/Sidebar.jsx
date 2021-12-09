import "./Sidebar.scss";
import { ReactComponent as BikingPicto } from "./pictos/bike.svg";
import { ReactComponent as BodybuildingPicto } from "./pictos/bodybuilding.svg";
import { ReactComponent as SwimingPicto } from "./pictos/swim.svg";
import { ReactComponent as YogaPicto } from "./pictos/yoga.svg";
import React from "react";

export default function Sidebar() {
	return (
		<nav class="sidebar">
			<aside class="sidebar__navigation">
				<YogaPicto class="sidebar__navigation__item" />
				<SwimingPicto class="sidebar__navigation__item" />
				<BodybuildingPicto class="sidebar__navigation__item" />
				<BikingPicto class="sidebar__navigation__item" />
			</aside>
			<footer class="sidebar__copyright">Copyright, SportSee 2020</footer>
		</nav>
	);
}
