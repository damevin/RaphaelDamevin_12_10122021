import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";
import "./ChartScorePie.scss";

export default function ChartScorePie({ userId }) {
	const { data, loading } = useApiGet("GET_INFORMATIONS", userId);

	if (data && !loading) {
		let dailyScore = data.data.todayScore;

		const dailyData = [
			{ name: "finished", value: dailyScore, fillColor: "red" },
			{ name: "inProgress", value: 1 - dailyScore, fillColor: "blue" },
		];
		return (
			<PieChart width={730} height={250}>
				<Pie data={dailyData} dataKey="value" cx="50%" cy="50%"  fill="#8884d8">
					{dailyData.map((entry, index) => (
						<Cell key={`${index}`} fill={entry.fillColor}  />
					))}
				</Pie>
			</PieChart>
		);
	} else {
		return <p>Loading..</p>;
	}
}
