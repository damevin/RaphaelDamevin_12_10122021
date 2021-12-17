import "./Home.scss";
import { useApiGet } from "../../Hooks/useApi";
import { useParams } from "react-router-dom";
import CardsGrid from "../../Components/Cards/CardsGrid";
import ChartActivities from "../../Components/Charts/ChartActivities/ChartActivities";
import ChartAverageSession from "../../Components/Charts/ChartAverageSession/ChartAverageSession";
import ChartDailyActivity from "../../Components/Charts/ChartDailyActivity/ChartDailyActivity";
import ChartScorePie from "../../Components/Charts/ChartScorePie/ChartScorePie";
import Error from "../../Containers/Error/Error";
import Header from "../../Components/Header/Header";
import React from "react";

export default function Home() {
	const { id } = useParams();
	const { data, loading, status, statusText, error } = useApiGet("GET_INFORMATIONS", id);
	if (loading) {
		/* TO DO COMPOSANT LOADING */
	}

	if (status === 404) {
		return <Error details={statusText} />;
	}

	if (!loading && data) {
		return (
			<main className="home">
				<Header userFirstName={data.data.userInfos.firstName} />
				<section className="home__section">
					<ChartDailyActivity className="dailyActivity" userId={id} />
					<ChartAverageSession className="averageSession" userId={id} />
					<ChartScorePie userId={id} />
					<ChartActivities userId={id} />
					<CardsGrid userId={id} />
				</section>
			</main>
		);
	} else {
		return <Error details={statusText} />;
	}
}
