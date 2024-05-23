import express, { Router } from "express";
import { vegmealsType } from "../controllers/veg.controllers.js";
import { veganmealsType } from "../controllers/vegan.controllers.js";

import { nonvegmealsType } from "../controllers/nonveg.controllers.js";

const router = express.Router();
router.get("/veg/:type", vegmealsType);
router.get("/nonveg/:type", nonvegmealsType);
router.get("/vegan/:type", veganmealsType);

export { router };
