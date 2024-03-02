// import { useEffect } from "react";
import Fixture from "./components/fixture.js";
import Navbar from "./components/navbar";
import Table from "./components/table.js";
// import { fetchFixtures } from "./lib/fetch-data";
import { data } from "./lib/dummy-data.js";
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
		<div>
			<div>
				<Navbar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Table data={data} />}></Route>
						<Route
							path="/fixture/:matchID"
							element={<Fixture data={data} />}
						></Route>
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	);
}

export default App;
