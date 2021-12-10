import "./Home.scss";
import { useApiGet } from "../../Hooks/useApi";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import React from "react";
import Error from "../../Containers/Error/Error";
import ChartDailyActivity from "../../Components/Charts/ChartDailyActivity/ChartDailyActivity";
import ChartAverageSession from "../../Components/Charts/ChartAverageSession/ChartAverageSession";

export default function Home() {
	const { id } = useParams();
	const { data, error, loading, status } = useApiGet("GET_INFORMATIONS", id);
	console.log(data, status);
	if (status === 404) {
		return <Error />;
	}
	if (data && !loading) {
		return (
			<main className="home">
				<Header
					userFirstName={data.data.userInfos.firstName}
					userLastName={data.data.userInfos.lastName}
				/>
				<ChartDailyActivity userId={id}></ChartDailyActivity>
				<ChartAverageSession userId={id}></ChartAverageSession>
			</main>
		);
	} else {
		return <></>;
	}
}
