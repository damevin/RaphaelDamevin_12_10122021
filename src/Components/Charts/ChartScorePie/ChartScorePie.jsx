import "./ChartScorePie.scss";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";
import Loader from "../../Loader/Loader";
import PropTypes from "prop-types";
import React from "react";

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
		return (
			<div className="chart__scorePie">
				<Loader />
			</div>
		);
	}
}

ChartScorePie.propTypes = {
	userId: PropTypes.string.isRequired,
};
