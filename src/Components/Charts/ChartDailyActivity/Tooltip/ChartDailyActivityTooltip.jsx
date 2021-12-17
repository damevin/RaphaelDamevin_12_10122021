import "./ChartDailyActivityTooltip.scoped.scss";

import React from "react";

export default function CustomTooltip({ payload, active, label }) {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip__dailyActivity">
				<p>{`${payload[0].value}`}kg</p>
				<p>{`${payload[1].value}`}Kcal</p>
			</div>
		);
	} else {
		return null;
	}
}
