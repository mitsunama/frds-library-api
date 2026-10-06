import { CategoryModel } from "../models/categoryModel.js";

export const CategoryController = {
    async create(req, res) {
        try {
            const { category_name } = req.body;
            const category = await CategoryModel.create(category_name);
            res.status(201).json(category);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const category = await CategoryModel.getAll();
            res.json(category);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const { category_id } = req.params;
            const category = await CategoryModel.getById(category_id);
            res.json(category);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { category_id } = req.params;
            const { category_name } = req.body;
            const result = await CategoryModel.update(category_id, category_name);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            const { category_id } = req.params;
            const result = await CategoryModel.remove(category_id);
            res.json(result);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
}