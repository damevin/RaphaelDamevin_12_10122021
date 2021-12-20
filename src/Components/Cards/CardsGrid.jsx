import "./CardsGrid.scss";
import { useApiGet } from "../../Hooks/useApi";
import CardKeyInfos from "../CardKeyInfos/CardKeyInfos";
import React from "react";

export default function Cards({ userId }) {
	const { data } = useApiGet("GET_KEYS", userId);

	if (data) {
		return (
			<section className="cardGrid">
				<CardKeyInfos type="Calories" value={data.data.keyData.calorieCount} />
				<CardKeyInfos type="Protéines" value={data.data.keyData.proteinCount} />
				<CardKeyInfos type="Glucides" value={data.data.keyData.carbohydrateCount} />
				<CardKeyInfos type="Lipides" value={data.data.keyData.lipidCount} />
			</section>
		);
	} else {
		return null;
	}
}
