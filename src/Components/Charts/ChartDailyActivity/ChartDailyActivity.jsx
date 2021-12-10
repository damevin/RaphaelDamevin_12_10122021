import "../../../style/variables.scss";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { ReactComponent as Dot } from "./dot.svg";
import { useApiGet } from "../../../Hooks/useApi";
import Error from "../../../Containers/Error/Error";
import React from "react";

export default function ChartDailyActivity({ userId }) {
	const { data, loading } = useApiGet("GET_ACTIVITY", userId);

	if (data && !loading) {
		return (
			<>
				Activité quotidienne
				<Dot fill=""></Dot>
				Poids (kg)
				<Dot fill={"red"}></Dot>
				Calories brûlées (kCal)
				<BarChart width={730} height={250} data={data.data.sessions}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="day" />
					<YAxis />
					<Tooltip />
					<Bar dataKey="kilogram" fill="#8884d8" />
					<Bar dataKey="calories" fill="#82ca9d" />
				</BarChart>
			</>
		);
	} else {
		return <Error />;
	}
}
