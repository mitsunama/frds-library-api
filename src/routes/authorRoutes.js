import express from "express";
import { AuthorController } from "../controllers/authorController.js"

const router = express.Router();

router.post("/", AuthorController.create);
router.get("/", AuthorController.getAll);
router.get("/:author_id", AuthorController.getById);
router.put("/:author_id", AuthorController.update);
router.delete("/:author_id", AuthorController.remove);

export default router;