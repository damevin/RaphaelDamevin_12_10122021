import "./Home.scss";
import { useApiGet } from "../../Hooks/useApi";
import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import React from "react";

export default function Home() {
	const { id } = useParams();
	const { data, error, loading } = useApiGet("GET_INFORMATIONS", id);

	if (!loading && data) {
		return (
			<main className="home">
				<span>{data.data.userInfos.firstName}</span>
				<span>{data.data.userInfos.lastName}</span>
			</main>
		);
	} else {
		return <></>;
	}
}
