import { nonvegMeal } from "../models/nonvegmeals.models.js";

export const nonvegmealsType = async (req, res) => {
	try {
		const meal = req.params.type;
		const data1 = await nonvegMeal.find({ type: meal, day: 1 });
		const data2 = await nonvegMeal.find({ type: meal, day: 2 });
		const data3 = await nonvegMeal.find({ type: meal, day: 3 });
		const data4 = await nonvegMeal.find({ type: meal, day: 4 });
		const data5 = await nonvegMeal.find({ type: meal, day: 5 });
		res.json([data1, data2, data3, data4, data5]);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
