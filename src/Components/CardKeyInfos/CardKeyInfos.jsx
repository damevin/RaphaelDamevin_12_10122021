import React from "react";
import { useApiGet } from "../../Hooks/useApi";

export default function CardKeyInfos({ userId }) {
	const { data, loading } = useApiGet("GET_KEYS", userId);
	return <div></div>;
	/* if (data && !loading) {
		const keyNumbers = data.data.keyData;
  console.log(keyNumbers);
		const keyNumbersArr = Object.values(keyNumbers);
		const keyNumbersEntries = ["", "", "", ""];
		console.log(keyNumbersArr);
		
	} */
}
