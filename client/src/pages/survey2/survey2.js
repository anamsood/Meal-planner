import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Nav from "../../components/nav/nav.js";

function Survey2() {
	const [selectedOption, setSelectedOption] = useState("");
	const navigate = useNavigate();
	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};

	const location = useLocation();
	// Parse query parameter from location search string
	const searchParams = new URLSearchParams(location.search);
	const survey1value = searchParams.get("survey1value");

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here, for example:
		if (selectedOption) {
			console.log("Selected option:", selectedOption);
			console.log("survey1: ", survey1value);
			navigate(`/meal?survey2value=${selectedOption}&survey1value=${survey1value}`);
		} else {
			alert("Please select an option before submitting.");
		}
	};

	return (
		<>
			<Nav />
			<div className="form">
				<form className="quiz-container" id="quiz" onSubmit={handleSubmit}>
					<div className="quiz-header">
						<h2 id="question">Select your diet</h2>
						<ul>
							<li>
								<input
									type="radio"
									name="answer"
									id="a"
									className="answer"
									value="veg"
									onChange={handleOptionChange}
									checked={selectedOption === "veg"}
								/>
								<label htmlFor="a" id="a_text">
									Vegetarian diet
								</label>
							</li>
							<li>
								<input
									type="radio"
									name="answer"
									id="b"
									className="answer"
									value="nonveg"
									onChange={handleOptionChange}
									checked={selectedOption === "nonveg"}
								/>
								<label htmlFor="b" id="b_text">
									Non-Vegetarian diet
								</label>
							</li>
							<li>
								<input
									type="radio"
									name="answer"
									id="c"
									className="answer"
									value="vegan"
									onChange={handleOptionChange}
									checked={selectedOption === "vegan"}
								/>
								<label htmlFor="c" id="c_text">
									Vegan diet
								</label>
							</li>
						</ul>
					</div>
					<button type="submit" id="submit">
						Submit
					</button>
				</form>
			</div>
		</>
	);
}

export default Survey2;
