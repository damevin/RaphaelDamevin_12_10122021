import React from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";
import "./ChartScorePie.scss";

export default function ChartScorePie({ userId }) {
	const { data, loading } = useApiGet("GET_INFORMATIONS", userId);

	if (data && !loading) {
		let dailyScore = data.data.score;
		const dailyData = [
			{ name: "finished", value: dailyScore, fillColor: "#ff0101" },
			{ name: "inProgress", value: 1 - dailyScore, fillColor: "transparent" },
		];
		return (
			<div className="chart__scorePie">
				<ResponsiveContainer width="100%" height="100%">
					<PieChart width={160} height={160}>
						<Pie
							data={dailyData}
							dataKey="value"
							innerRadius={70}
							outerRadius={80}
							startAngle={90}
							endAngle={450}
							paddingAngle={5}
						>
							{dailyData.map((entry, index) => (
								<Cell key={`${index}`} fill={entry.fillColor} cornerRadius="50%" className="chart__pie" />
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
				<section className="chart__scorePie__legend">
					<span className="chart__scorePie__legend__percent">{dailyScore * 100}%</span>
					<span className="chart__scorePie__legend__details">
						de votre
						<br /> objectif
					</span>
				</section>
			</div>
		);
	} else {
		return <p>Loading..</p>;
	}
}
