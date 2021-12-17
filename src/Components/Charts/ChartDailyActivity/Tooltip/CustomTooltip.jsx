import "./CustomTooltip.scss";

import React from "react";

export default function CustomTooltip({ payload, active, label }) {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip">
				<p className="tooltip__value">{`${payload[0].value}`}kg</p>
				<p className="tooltip__value">{`${payload[1].value}`}Kcal</p>
			</div>
		);
	} else {
		return null;
	}
}
