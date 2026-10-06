import { supabase } from "../config/supabaseClient.js";

const valid_status = ["active", "overdue", "returned", "returned_late"]

export const LoanModel = {

    async getAll({ status, member_id, book_id } = {}) {
        if (status && !valid_status.includes(status)) {
            throw new Error(`Invalid status. Use one of: ${valid_status.join(", ")}`);
        }

        let query = supabase
        .from("loan_with_status")
        .select("loan_id, book_id, member_id, loan_date, due_date, return_date, status");

        if (status) query = query.eq("status", status);
        if (member_id) query = query.eq("member_id", member_id);
        if (book_id) query = query.eq("book_id", book_id);

        const { data, error } = await query;
        if (error) throw error;
        return data;
    },

    async getById(loan_id) {
        const { data, error } = await supabase
        .from("loan")
        .select('*')
        .eq("loan_id", loan_id)
        if (error) throw error;
        return data;
    },

    async createLoan({ book_id, member_id, due_date }) {
        if (!book_id || !member_id || !due_date) {
            throw new Error("Enter a valid book ID, member ID, or due time");
        }

        const due = new Date(due_date);
        if (Number.isNaN(due.getTime())) {
            throw new Error("Enter a valid due time");
        }

        const now = new Date();
        if (due <= now) {
            throw new Error("Due time must be in the future");
        }
        const { data, error } = await supabase
        .rpc("create_loan", {
            "p_book_id": book_id,
            "p_member_id": member_id,
            "p_due_date": due.toISOString(),
        })        
        .single();
        if (error) throw error;
        return data;
    },

    async returnLoan(loan_id) {
        if (!loan_id) {
            throw new Error("Enter a valid loan ID");
        }

        const { data, error } = await supabase
        .rpc("return_loan", { "p_loan_id": loan_id})
        .single();

        return data;
    },
};