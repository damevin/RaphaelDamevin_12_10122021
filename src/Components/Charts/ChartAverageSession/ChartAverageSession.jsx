import "./ChartAverageSession.scss";
import { LineChart, XAxis, YAxis, Line, Tooltip, ResponsiveContainer } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";
import ChartAverageSessionTooltip from "./Tooltip/ChartAverageSessionTooltip.jsx";
import Loader from "../../Loader/Loader";
import PropTypes from "prop-types";
import React from "react";

export default function ChartAverageSession({ userId }) {
	const { data, loading } = useApiGet("GET_AVERAGE", userId);

	if (data && !loading) {
		const sessions = data.data.sessions;
		return (
			<div className="chart__averageSession">
				<h2 className="chart__averageSession__title">
					Durée moyenne des
					<br />
					sessions
				</h2>
				<ResponsiveContainer height="100%" width="100%">
					<LineChart
						data={sessions}
						outerRadius="75%"
						margin={{ top: 0, right: 12, bottom: 24, left: 12 }}
					>
						<XAxis
							dataKey="day"
							stroke="rgba(255, 255, 255, 0.6)"
							axisLine={false}
							dy={10}
							tick={{
								fontSize: 12,
								fontWeight: 500,
							}}
							tickLine={false}
						/>
						<YAxis dataKey="sessionLength" domain={[0, "dataMax + 60"]} hide={true} />
						<Tooltip content={<ChartAverageSessionTooltip />} />
						<Line
							activeDot={{
								stroke: "rgba(255,255,255, 0.6)",
								strokeWidth: 2,
								r: 5,
							}}
							dataKey="sessionLength"
							dot={false}
							stroke="rgba(255, 255, 255, 0.6)"
							strokeWidth={1.5}
							type={"monotone"}
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	} else {
		return (
			<div className="chart__averageSession">
				<Loader />
			</div>
		);
	}
}

ChartAverageSession.propTypes = {
	userId: PropTypes.string.isRequired,
};
