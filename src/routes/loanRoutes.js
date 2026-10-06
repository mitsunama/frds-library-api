import express from "express"
import { LoanController } from "../controllers/loanController.js"

const router = express.Router();

router.post("/", LoanController.createLoan);
router.get("/", LoanController.getAll);
router.get("/:loan_id", LoanController.getById);
router.patch("/:loan_id", LoanController.returnLoan);

export default router;