import { useState, useEffect } from "react";

const API = "http://localhost:3001";

/**
 * Factory for retrive valid query depends on his service
 * @param {*} service
 * @param {*} userId
 * @returns
 */
function getQueryByServices(service, userId) {
	switch (service) {
		case "GET_ACTIVITY":
			return `user/${userId}/activity`;
		case "GET_PERFORMANCE":
			return `user/${userId}/performance`;
			case "GET_AVERAGE": 
			return `user/${userId}/average-sessions`
		case "GET_INFORMATIONS":
			return `user/${userId}`;
		default:
			return null;
	}
}

/**
 * Custom hook for get data from an API
 * @param {String} url | URL where we fetch data
 * @returns {Object}
 */
export const useApiGet = (service, userId) => {
	const [status, setStatus] = useState(0);
	const [statusText, setStatusText] = useState("");
	const [data, setData] = useState();
	const [error, setError] = useState();
	const [loading, setLoading] = useState();

	const endpoint = getQueryByServices(service, userId);

	useEffect(() => {
		if (!endpoint) return;

		setLoading(true);
		const getApiData = async () => {
			setLoading(true);
			try {
				const url = `${API}/${endpoint}`;
				const apiResponse = await fetch(url);
				const json = await apiResponse.json();
				setStatus(apiResponse.status);
				setStatusText(apiResponse.statusText);
				setData(json);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};
		getApiData();
	}, [endpoint, service, userId]);

	return { status, statusText, data, error, loading };
};
