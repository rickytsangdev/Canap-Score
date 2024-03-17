import "../styles/Email.scss";

export default function Email() {
	return (
		<>
			<div className="section_email">
				<h1>SUBSCRIBE TO OUR EMAILS</h1>
				<p>
					Soyez le premier à connaître les dernières infos en live et les offres
					exclusives.
				</p>
				<div className="input_bloc">
					<input
						className="input_email"
						type="email"
						placeholder="E-mail"
					></input>
					<button type="submit" className="button_email">
						send
					</button>
				</div>
			</div>
		</>
	);
}
