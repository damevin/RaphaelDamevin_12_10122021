import "./ChartAverageSessionTooltip.scoped.scss";
import PropTypes from "prop-types";
import React from "react";

export default function CustomTooltip({ payload, active }) {
	if (active && payload && payload.length) {
		return <p className="tooltip__chartAverageSession">{`${payload[0].value}`}min</p>;
	} else {
		return null;
	}
}

CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};
