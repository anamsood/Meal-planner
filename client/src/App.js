import "./App.css";
import Nav from "./components/nav/nav.js";

import { useNavigate } from "react-router-dom";
function App() {
	const navigate = useNavigate();
	return (
		<>
			<Nav />
			<div className="Landing">
				<div className="Landing__banner">
					<h1 className="Landing__banner__heading">Custom Meal Planning made easy</h1>
				</div>
				<div className="Landing__data">
					<div className="Landing__data__content">
						<h1>Does this sound like you?</h1>
						<ul>
							<li>Wasted a lot of time thinking about what I should make for dinner today</li>
							<li>Want to watch what I eat but don't know how?</li>
							<li>Not good at pre-planning meals</li>
							<li>Want to track my weight and calorie intake</li>
						</ul>
						<button className="Button" onClick={() => navigate("/survey1")}>
							Let's find that meal plan
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
