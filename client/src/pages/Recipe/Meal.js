import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import "./meal.css";

function Meal() {
	const [data, setData] = useState([]);

	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const survey2Value = searchParams.get("survey2value");
	const survey1Value = searchParams.get("survey1value");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`http://localhost:4000/api/v2/${survey2Value}/${survey1Value}`
				);

				const data = await response.json();

				setData(data);
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};
		fetchData();
	}, [survey1Value, survey2Value]);
	console.log(data);

	return (
		<div className="recipe">
			<header>
				<div className="container">
					<h1 className="logo">Meal Planner</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>

							<li>About</li>
							<li>Recipes</li>
						</ul>
					</nav>
				</div>
			</header>
			<section className="hero">
				<div className="hero-section">
					<h2>Welcome to our Recipe Collection</h2>
					<p>Find your healthy recipes to maintain your health</p>
				</div>
			</section>

			<section className="recipes">
				<h1> Diet Recipes</h1>
				{data.map((dayData, index) => (
					<div key={index}>
						<h2>Day - {index + 1}</h2>
						<div className="recipe-section">
							{dayData.map((recipe) => (
								<div className="recipe-card" key={recipe._id}>
									<h1>{recipe.title}</h1>
									<img src={recipe.image} alt="" />
									<p>{recipe.item}</p>
									<div className="ing">{recipe.ingredients}</div>
								</div>
							))}
						</div>
					</div>
				))}
				;
			</section>
		</div>
	);
}

export default Meal;
