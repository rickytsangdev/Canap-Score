export const fetchFixtures = async () => {
	const url = "https://api-football-v1.p.rapidapi.com/v3/fixtures?live=all";
	const options = {
		method: "GET",
		headers: {
			"X-RapidAPI-Key": "2b497493dbmsh9d015fbedafd701p1b2a56jsnbc00904ad228",
			"X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
};
