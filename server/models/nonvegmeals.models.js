import mongoose from "mongoose";

const nonvegmealmealSchema = mongoose.Schema({
	id: Number,
	day: Number,
	type: String,
	title: String,
	item: String,
	image: String,
	ingredient: String,
});

export const nonvegMeal = new mongoose.model("nonvegmeals", nonvegmealmealSchema);
