import { BookModel } from "../models/bookModel.js";

export const BookController = {
    async create(req, res) {
        try {
            const book = await BookModel.create(req.body);
            res.status(201).json(book);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const book = await BookModel.getAll();
            res.json(book);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const book = await BookModel.getById(req.params.book_id);
            res.json(book);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { book_id } = req.params;
            const book = await BookModel.update(book_id, req.body);
            res.json(book);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            await BookModel.remove(req.id.params);
            res.json({ message: "Book was deleted successfully" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
}