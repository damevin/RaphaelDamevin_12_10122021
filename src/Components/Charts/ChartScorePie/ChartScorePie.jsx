import React from "react";
import { Cell, Pie, PieChart } from "recharts";
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
			<div className="chart__score">
				<h3 className="chart__score__title">Score</h3>
				<main className="chart__score__main">
					<PieChart width={150} height={150}>
						<Pie
							data={dailyData}
							dataKey="value"
							innerRadius={70}
							outerRadius={80}
							startAngle={90}
							endAngle={460}
							paddingAngle={5}
							cx={"50%"}
							cy={"50%"}
						>
							{dailyData.map((entry, index) => (
								<Cell key={`${index}`} fill={entry.fillColor} cornerRadius="50%" className="chart__pie" />
							))}
						</Pie>
					</PieChart>
					<section className="chart__score__legend">
						<p className="chart__score__legend__details">
							<span>{dailyScore * 100}%</span>
							<br /> de votre objectif
						</p>
					</section>
				</main>
			</div>
		);
	} else {
		return <p>Loading..</p>;
	}
}
