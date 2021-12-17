import "./Home.scss";
import { useApiGet } from "../../Hooks/useApi";
import { useParams } from "react-router-dom";
import CardKeyInfos from "../../Components/CardKeyInfos/CardKeyInfos";
import ChartActivities from "../../Components/Charts/ChartActivities/ChartActivities";
import ChartAverageSession from "../../Components/Charts/ChartAverageSession/ChartAverageSession";
import ChartDailyActivity from "../../Components/Charts/ChartDailyActivity/ChartDailyActivity";
import ChartScorePie from "../../Components/Charts/ChartScorePie/ChartScorePie";
import Error from "../../Containers/Error/Error";
import Header from "../../Components/Header/Header";
import React from "react";

export default function Home() {
	const { id } = useParams();
	const { data, loading, status } = useApiGet("GET_INFORMATIONS", id);

	if (loading) {
		/* TO DO COMPOSANT LOADING */
		return <Error />;
	}
	if (!loading && data) {
		return (
			<main className="home">
				<Header userFirstName={data.data.userInfos.firstName} />
				<section className="home__section">
					<ChartDailyActivity className="dailyActivity" userId={id}></ChartDailyActivity>
					<ChartAverageSession className="averageSession" userId={id}></ChartAverageSession>
					<ChartScorePie userId={id}></ChartScorePie>
					<ChartActivities userId={id}></ChartActivities>
					<CardKeyInfos userId={id}></CardKeyInfos>
				</section>
			</main>
		);
	} else {
		return <></>;
	}
}
