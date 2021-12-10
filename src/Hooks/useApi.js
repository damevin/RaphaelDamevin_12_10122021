import { useState, useEffect } from "react";

/**
	* Util function for get correct query
	* @param {String} url | URL where we fetch data
	* @param {String} query | Query name 
	* @param {Number} userId | User id
	* @returns {String}
	*/
const getQuery = (url, query, userId) => {
	console.log(url, query, userId);
	switch (query) {
		case "GET_INFORMATIONS":
			return `${url}/user/${userId}`;
		case "GET_ACTIVITY":
			return `${url}/user/${userId}/activity`;
		case "GET_PERFORMANCE":
			return `${url}/user/${userId}/performance`;
		default:
			return "/";
	}
};

/**
 * Custom hook for get data from an API
 * @param {String} url | URL where we fetch data
 * @returns {Object}
 */
export const useApiGet = (url, query, userId) => {
	const [status, setStatus] = useState(0);
	const [statusText, setStatusText] = useState("");
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const getApiData = async () => {
		setLoading(true);
		try {
			const apiResponse = await fetch(getQuery(url, query, userId));
			const json = await apiResponse.json();
			setStatus(apiResponse.status);
			setStatusText(apiResponse.statusText);
			setData(json);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		getApiData();
	}, []);

	return { status, statusText, data, error, loading };
};
