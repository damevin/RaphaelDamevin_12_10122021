import "../../../style/variables.scss";
import "./ChartDailyActivity.scss";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { ReactComponent as Dot } from "./dot.svg";
import { useApiGet } from "../../../Hooks/useApi";
import ChartDailyActivityTooltip from "./Tooltip/ChartDailyActivityTooltip";
import Error from "../../../Containers/Error/Error";
import React from "react";

export default function ChartDailyActivity({ userId }) {
	const { data, loading } = useApiGet("GET_ACTIVITY", userId);

	if (data && !loading) {
		const sessions = data.data.sessions;

		return (
			<div className="chart__dailyActivity">
				<header className="chart__header">
					<h3 className="chart__header__title">Activité quotidienne</h3>
					<section className="chart__header__section">
						<span className="chart__header__section__item">
							<Dot style={{ padding: "0px 5px" }} fill="#282D30"></Dot>
							Poids (kg)
						</span>
						<span className="chart__header__section__item">
							<Dot style={{ padding: "0px 5px" }} fill="#E60000"></Dot>
							Calories brûlées (kCal)
						</span>
					</section>
				</header>

				<ResponsiveContainer width="100%" height="80%">
					<BarChart
						data={sessions}
						margin={{ top: 0, right: 48, bottom: 32, left: 48 }}
						barGap={8}
						barCategoryGap="35%"
					>
						<CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#DEDEDE" />
						<XAxis
							dataKey="day"
							dy={16}
							padding={{ left: -48, right: -48 }}
							stroke="#DEDEDE"
							tick={{ fontSize: 14, fontWeight: 500 }}
							tickLine={false}
						/>
						<YAxis
							allowDecimals={false}
							axisLine={false}
							dataKey="kilogram"
							domain={["dataMin - 1", "dataMax + 2"]}
							dx={48}
							orientation="right"
							stroke="#DEDEDE"
							tickLine={false}
							yAxisId="kg"
						/>
						<YAxis dataKey="calories" domain={[0, "dataMax + 50"]} hide={true} yAxisId="cal" />
						<Tooltip
							content={<ChartDailyActivityTooltip />}
							cursor={{
								fill: "rgba(0, 0, 0, 0.1)",
							}}
						/>
						<Bar dataKey="kilogram" fill="#282D30" yAxisId="kg" radius={[50, 50, 0, 0]} maxBarSize={8} />
						<Bar dataKey="calories" fill="#E60000" yAxisId="cal" radius={[50, 50, 0, 0]} maxBarSize={8} />
					</BarChart>
				</ResponsiveContainer>
			</div>
		);
	} else {
		return <Error />;
	}
}
