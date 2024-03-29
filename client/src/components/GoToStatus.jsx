import "../styles/GoToStatus.scss";

export default function GoToStatus() {
	return (
		<div className="section_status">
			<div className="grid-container">
				<div className="card">
					<div className="bloc_for_img">
						<img
							className="img_picture"
							src="/shirt-france.jpeg"
							alt="maillot-de-l'equipe-de-france"
						></img>
					</div>

					<h3>France</h3>
				</div>
				<div className="card">Finished Results</div>
				<div className="card">Upcoming Matches</div>
				<div className="card">Highlights</div>
				<div className="card">Team Lineups</div>
				<div className="card">Weather Conditions</div>
				<div className="card">Injury Updates</div>
				<div className="card">Transfer News</div>
			</div>
		</div>
	);
}
