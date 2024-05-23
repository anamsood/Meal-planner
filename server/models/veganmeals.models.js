import mongoose from "mongoose";

const veganmealSchema = mongoose.Schema({
	id: Number,
	day: Number,
	type: String,
	title: String,
	item: String,
	image: String,
	ingredient: String,
	day: Number,
});

export const veganMeal = new mongoose.model("veganmeals", veganmealSchema);
