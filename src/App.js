import Navbar from "./Components/Navbar/Navbar";
import Router from "./router";
import Sidebar from "./Components/Sidebar/Sidebar";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Router></Router>
			<Sidebar />
		</div>
	);
}

export default App;
