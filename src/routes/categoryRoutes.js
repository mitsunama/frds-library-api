import express from "express"
import { CategoryController } from "../controllers/categoryController.js"

const router = express.Router();

router.post("/", CategoryController.create);
router.get("/", CategoryController.getAll);
router.get("/:category_id", CategoryController.getById);
router.put("/:category_id", CategoryController.update);
router.delete("/:category_id", CategoryController.remove);

export default router;