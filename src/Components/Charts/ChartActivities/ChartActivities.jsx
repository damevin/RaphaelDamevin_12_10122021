import "./ChartActivities.scss";
import { PolarAngleAxis, PolarRadiusAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { useApiGet } from "../../../Hooks/useApi";

import React from "react";

export default function ChartActivities({ userId }) {
	const { data, loading } = useApiGet("GET_PERFORMANCE", userId);

	if (data && !loading) {
		const uppercaseFormatter = (str) => {
			return (str + "").charAt(0).toLocaleUpperCase() + str.substr(1);
		};

		const formatKindOfData = (tickItem) => {
			return uppercaseFormatter(data.data.kind[tickItem]);
		};

		return (
			<div className="chart__activities">
				<RadarChart outerRadius={70} width={250} height={200} data={data.data.data}>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						stroke="white"
						tickLine={false}
						tickFormatter={formatKindOfData}
						tick={{
							fontSize: 9,
							fontWeight: 500,
						}}
					/>
					<PolarRadiusAxis domain={[0, 300]} tick={false} axisLine={false} tickCount={6} />
					<Radar dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
				</RadarChart>
			</div>
		);
	} else {
		return <p>LOADING....</p>;
	}
}
