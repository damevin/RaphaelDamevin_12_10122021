import "./Error.scss";
import PropTypes from "prop-types";
import React from "react";

export default function Error({ details }) {
	return (
		<div className="error">
			<h1 className="error__title">Utilisateur introuvable 😭</h1>
			<span className="error__description">Error : {details}</span>
		</div>
	);
}

Error.propTypes = {
	details: PropTypes.string,
};
