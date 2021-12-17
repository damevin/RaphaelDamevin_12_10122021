import "./ChartAverageSession.scss";
import {
	LineChart,
	CartesianGrid,
	XAxis,
	YAxis,
	Line,
	Legend,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { useApiGet } from "../../../Hooks/useApi";
import React from "react";

export default function ChartAverageSession({ userId }) {
	const { data, loading } = useApiGet("GET_AVERAGE", userId);

	if (data && !loading) {
		const sessions = data.data.sessions;
		return (
			<div className="chart__averageSession">
				<h2>Durée moyenne des sessions</h2>
				<ResponsiveContainer height="100%" width="100%">
					<LineChart data={sessions} outerRadius="75%">
						<CartesianGrid strokeDasharray="3 3" />
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
						<Tooltip />
						<Line dataKey="sessionLength" stroke="#8884d8" type="monotone" />
					</LineChart>
				</ResponsiveContainer>
			</div>
		);
	} else {
		/* TO DO : Composant qui affiche le chargement */
		return <span>Loading...</span>;
	}
}
