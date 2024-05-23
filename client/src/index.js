import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Survey1 from "./pages/survey1/survey1.js";
import Survey2 from "./pages/survey2/survey2.js";
import Meal from "./pages/Recipe/Meal.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/survey1",
		element: <Survey1 />,
		errorElement: <h1>page not found</h1>,
	},
	{
		path: "/survey2",
		element: <Survey2 />,
	},
	{
		path: "/meal",
		element: <Meal />,
	},
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
