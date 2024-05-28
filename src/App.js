import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LeaderBoard from "./components/LeaderBoard";
import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<LeaderBoard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
