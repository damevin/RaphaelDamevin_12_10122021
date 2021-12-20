import "./ChartDailyActivityTooltip.scoped.scss";
import PropTypes from "prop-types";
import React from "react";

export default function CustomTooltip({ payload, active }) {
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

CustomTooltip.propTypes = {
	payload: PropTypes.array,
	active: PropTypes.bool,
};
