import "../styles/Header.scss";
import AdBar from "./AdBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
	return (
		<>
			<AdBar />
			<div className="header">
				<div className="go_to_live">
					<h2>
						<a className="ghost-button" href="/">
							Live Matchs
						</a>
					</h2>
				</div>
				<h1>
					<a className="title" href="/">
						Canap⚽Score
					</a>
				</h1>

				<nav className="menu_nav">
					<ul className="nav_ul">
						<li>
							{" "}
							<span className="nav_link">
								{" "}
								<FontAwesomeIcon icon={faHouse} />
								<a href="/">Accueil</a>
							</span>
						</li>
						<li className="nav_li">
							{" "}
							<span className="nav_link">
								<FontAwesomeIcon icon={faUser} />
								<a href="/">Login</a>
							</span>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
