import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Containers/Home/Home";

const Router = () => {
	return (
		<Routes>
			<Route path="/user/:id" element={<Home />}></Route>
			<Route path="*" element={<Navigate to="/user/18" />}></Route>
		</Routes>
	);
};

export default Router;
