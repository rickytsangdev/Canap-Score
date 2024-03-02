export default function Table({ data }) {
	return (
		<div>
			{data.response.map((fixture) => (
				<div>{fixture.teams.home.name}</div>
			))}
		</div>
	);
}
