import Navbar from "./Components/Navbar/Navbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { useApiGet } from "./Hooks/useApi";
import Router from "./router";

function App() {
	const callApi = useApiGet("http://localhost:3001", "GET_INFORMATIONS", 18);
	if (!callApi.loading) console.log(callApi.data);

	return (
		<div className="App">
			<Navbar />
			<Router></Router>
			<Sidebar />
		</div>
	);
}

export default App;
