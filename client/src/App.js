// import { useEffect } from "react";
import Navbar from "./components/navbar";
import Table from "./components/table.js";
// import { fetchFixtures } from "./lib/fetch-data";
import { data } from "./lib/dummy-data.js";

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
			<Navbar />
			<Table data={data} />
		</div>
	);
}

export default App;
