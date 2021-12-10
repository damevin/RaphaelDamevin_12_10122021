import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<nav className="navbar">
			<Logo className="navbar__logo" />
			<ul className="navbar__section">
				<li className="navbar__section__item">Accueil</li>
				<li className="navbar__section__item">Profil</li>
				<li className="navbar__section__item">Réglages</li>
				<li className="navbar__section__item">Communauté</li>
			</ul>
		</nav>
	);
}
