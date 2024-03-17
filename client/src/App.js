// import { useEffect } from "react";

import "./App.scss";

// Import components
import Fixture from "./components/Fixture.jsx";
import Header from "./components/Header.jsx";
import TableScore from "./components/TableScore.jsx";
import HomePage from "./pages/HomePage.jsx";
import UserProfilePage from "./pages/UserProfilePage.jsx";
import AdBar from "./components/AdBar.jsx";

// Import Service to consume data
// import { fetchFixtures } from "./services/fetch-data";
import { data } from "./services/dummy-data.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	// const fetchData = async () => {
	// 	const fixtures = await fetchFixtures();
	// 	console.log(fixtures);
	// };

	// useEffect(() => {
	// 	fetchData();
	// });

	console.log(data);

	return (
		<div className="app_container">
			<AdBar />
			<Header />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<TableScore data={data} />}></Route>
					<Route
						path="/fixture/:matchID"
						element={<Fixture data={data} />}
					></Route>
					<Route path="/home" element={<HomePage />}></Route>
					<Route path="/profile" element={<UserProfilePage />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
