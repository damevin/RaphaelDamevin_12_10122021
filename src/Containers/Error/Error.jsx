import React from "react";
import "./Error.scss";

export default function Error({ details }) {
	return (
		<div className="error">
			<h1 className="error__title">Utilisateur introuvable 😭</h1>
			<span className="error__description">Error : {details}</span>
		</div>
	);
}
