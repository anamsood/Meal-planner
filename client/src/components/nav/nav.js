import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="Nav">
				<button className="Nav__button" onClick={() => navigate("/")}>
					Home
				</button>
				<button className="Nav__button" onClick={() => navigate("/survey1")}>
					Survey
				</button>
			</div>
		</>
	);
};

export default Nav;
