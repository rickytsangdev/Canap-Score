import { useParams } from "react-router-dom";

export default function Fixture() {
	const params = useParams();

	return <div> yes - {params.matchID} </div>;
}
