import Navbar from "./Components/Navbar/Navbar";
import Router from "./router";
import Sidebar from "./Components/Sidebar/Sidebar";
import "../src/style/layout.scss";

function App() {
	return (
		<div className="layout">
			<Navbar />
			<Router />
			<Sidebar />
		</div>
	);
}

export default App;
