import { LoanModel } from "../models/loanModel.js";

export const LoanController = {
    async getAll(req, res) {
        try {
            const { status, member_id, book_id }= req.query;
            const loan = await LoanModel.getAll({ status, member_id, book_id });
            res.json(loan);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const loan = await LoanModel.getById(req.params.loan_id);
            res.json(loan);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async createLoan(req, res) {
        try {
            const { book_id, member_id, due_date } = req.body;
            const loan = await LoanModel.createLoan(book_id, member_id, due_date);
            res.status(201).json(loan);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async returnLoan(req, res) {
        try {
            const { loan_id } = req.body;
            const loan = await LoanModel.returnLoan(loan_id);
            res.status(200).json(loan);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
}