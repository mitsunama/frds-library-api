import express from "express"
import { MemberController } from "../controllers/memberController.js"

const router = express.Router();

router.post("/", MemberController.create);
router.get("/", MemberController.getAll);
router.get("/:member_id", MemberController.getById);
router.put("/:member_id", MemberController.update);
router.delete("/:member_id", MemberController.remove);

export default router;