import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./Navbar.scss";

export default function Navbar() {
	return (
		<nav class="navbar">
			<Logo class="navbar__logo" />
			<ul class="navbar__section">
				<li class="navbar__section__item">Accueil</li>
				<li class="navbar__section__item">Profil</li>
				<li class="navbar__section__item">Réglages</li>
				<li class="navbar__section__item">Communauté</li>
			</ul>
		</nav>
	);
}
