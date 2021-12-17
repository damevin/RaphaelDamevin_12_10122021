import "./ChartAverageSessionTooltip.scoped.scss";

import React from "react";

export default function CustomTooltip({ payload, active, label }) {
	if (active && payload && payload.length) {
		return <p className="tooltip__chartAverageSession">{`${payload[0].value}`}min</p>;
	} else {
		return null;
	}
}
