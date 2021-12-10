import "./ChartAverageSession.scss";
import { LineChart, CartesianGrid, XAxis, YAxis, Line, Legend, Tooltip } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";
import React from "react";

export default function ChartAverageSession({ userId }) {
	const { data, loading } = useApiGet("GET_AVERAGE", userId);

	if (data && !loading) {
  const sessions = data.data.sessions
		return (
			<div>
				<h2>Durée moyenne des sessions</h2>
				<LineChart
					width={730}
					height={250}
					data={sessions}
					margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis dataKey="sessionLength" />
					<Tooltip />
					<Legend />
					<Line type="monotone" dataKey="sessionLength"  stroke="#8884d8" />
				</LineChart>
			</div>
		);
	} else {
  /* TO DO : Composant qui affiche le chargement */
  return <span>Loading...</span>
 }
}
