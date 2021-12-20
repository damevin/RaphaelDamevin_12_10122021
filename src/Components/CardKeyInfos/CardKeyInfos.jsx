import "./CardKeyInfos.scss";
import iconCalories from "./icons/iconCalories.svg";
import iconCarbs from "./icons/iconCarbs.svg";
import iconFat from "./icons/iconFat.svg";
import iconProteins from "./icons/iconProteins.svg";
import PropTypes from "prop-types";
import React from "react";

const iconsTypes = {
	Calories: iconCalories,
	Glucides: iconCarbs,
	Protéines: iconProteins,
	Lipides: iconFat,
};

const unitTypes = {
	Calories: "Kcal",
	Glucides: "g",
	Protéines: "g",
	Lipides: "g",
};

export default function CardKeyInfos({ type, value }) {
	return (
		<article className="cardKeys">
			<img className="cardKeys__logo" src={iconsTypes[type]} alt="" />
			<div className="cardKeys__section">
				<span className="cardKeys__value">{`${value}${unitTypes[type]}`}</span>
				<span className="cardKeys__type">{type}</span>
			</div>
		</article>
	);
}

CardKeyInfos.propTypes = {
	type: PropTypes.string.isRequired,
	value: PropTypes.number.isRequired,
};
