import mongoose from "mongoose";

const vegmealSchema = mongoose.Schema({
	id: Number,
	day: Number,
	type: String,
	title: String,
	item: String,
	image: String,
	ingredient: String,
});

export const vegMeal = new mongoose.model("vegmeals", vegmealSchema);
