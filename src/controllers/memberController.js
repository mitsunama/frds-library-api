import { MemberModel } from "../models/memberModel.js";

export const MemberController = {
    async create(req, res) {
        try {
            const member = await MemberModel.create(req.body);
            res.status(201).json(member);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async getAll(req, res) {
        try {
            const member = await MemberModel.getAll();
            res.json(member);
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    },

    async getById(req, res) {
        try {
            const member = await MemberModel.getById(req.params.member_id);
            res.json(member);
        } catch (err) {
            res.status(404).json({ error: err.message });
        }
    },

    async update(req, res) {
        try {
            const { member_id } = req.params;
            const member = await MemberModel.update(member_id, req.body);
            res.json(member);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },

    async remove(req, res) {
        try {
            await MemberModel.remove(req.id.params);
            res.json({ message: "Member was deleted successfully" });
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    },
}