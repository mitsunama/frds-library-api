import express from "express"
import { BookController } from "../controllers/bookController.js"

const router = express.Router();

router.post("/", BookController.create);
router.get("/", BookController.getAll);
router.get("/:book_id", BookController.getById);
router.put("/:book_id", BookController.update);
router.delete("/:book_id", BookController.remove);

export default router;