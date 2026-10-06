import { AuthorModel } from "../models/authorModel.js";

export const AuthorController = {
    async create(req, res) {
        try {
            const { author_name } = req.body;
            const author = await AuthorModel.create(author_name);
            res.status(201).json(author);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const author = await AuthorModel.getAll();
            res.json(author);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const { author_id } = req.params;
            const author = await AuthorModel.getById(author_id);
            res.json(author);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { author_id } = req.params;
            const { author_name } = req.body;
            const result = await AuthorModel.update(author_id, author_name);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            const { author_id } = req.params;
            const result = await AuthorModel.remove(author_id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
}