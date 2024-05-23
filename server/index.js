import connectDb from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
	path: "./.env",
});

connectDb()
	.then(() => {
		app.listen(process.env.PORT || 4000, () => {
			console.log(`app is listening on port ${process.env.PORT}`);
		});
	})
	.catch((error) => {
		console.log(error);
	});
