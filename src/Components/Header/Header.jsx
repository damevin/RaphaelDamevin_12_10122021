import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";

export default function Header({ userFirstName }) {
	return (
		<header className="header">
			<h1 className="header__title">
				Bonjour <span className="header__title__child">{userFirstName}</span>
			</h1>
			<p className="header__subtitle">Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
		</header>
	);
}

Header.propTypes = {
	userFirstName: PropTypes.string.isRequired,
};