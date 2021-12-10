import "./ChartActivities.scss";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";

import React from "react";

const activities = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];

export default function ChartActivities({ userId }) {
	const { data, loading } = useApiGet("GET_PERFORMANCE", userId);

	if (data && !loading) {
		const userData = data.data.data;
		console.log(userData, "*****");

		return (
			<div>
				<RadarChart outerRadius={90} width={730} height={250} data={userData}>
					<PolarGrid />
					<PolarAngleAxis dataKey="kind" />
					<Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				</RadarChart>
			</div>
		);
	} else {
		return <p>Loading</p>;
	}
}
