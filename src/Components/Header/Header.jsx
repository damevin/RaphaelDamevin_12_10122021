import React from "react";
import "./Header.scss";

export default function Header() {
	return (
		<header className="header">
			<h1 className="header__title">Bonjour user</h1>
			<p className="header__subtitle">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		</header>
	);
}
