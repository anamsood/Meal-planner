import React, { useState } from "react";
import "./survey1.css";
import { useNavigate } from "react-router-dom";
import Nav from "../../components/nav/nav.js";
function Survey1() {
	const [selectedOption, setSelectedOption] = useState("");
	const navigate = useNavigate();
	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (selectedOption) {
			console.log("Selected option:", selectedOption);
			navigate(`/survey2?survey1value=${selectedOption}`);
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
						<h2 id="question">Select your preference</h2>
						<ul>
							<li>
								<input
									type="radio"
									name="answer"
									id="a"
									className="answer"
									value="looseWeight"
									onChange={handleOptionChange}
									checked={selectedOption === "looseWeight"}
								/>
								<label htmlFor="a" id="a_text">
									Loose Weight
								</label>
							</li>
							<li>
								<input
									type="radio"
									name="answer"
									id="b"
									className="answer"
									value="gainWeight"
									onChange={handleOptionChange}
									checked={selectedOption === "gainWeight"}
								/>
								<label htmlFor="b" id="b_text">
									Gain Weight
								</label>
							</li>
							<li>
								<input
									type="radio"
									name="answer"
									id="c"
									className="answer"
									value="maintainWeight"
									onChange={handleOptionChange}
									checked={selectedOption === "maintainWeight"}
								/>
								<label htmlFor="c" id="c_text">
									Maintain Weight
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

export default Survey1;
