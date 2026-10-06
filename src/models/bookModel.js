import { supabase } from "../config/supabaseClient.js";

export const BookModel = {
    async getAll() {
        const { data, error } = await supabase
        .from("book")
        .select("book_id, isbn, book_name, author_id, category_id, stock");
        if (error) throw error;
        return data;
    },

    async getById(book_id) {
        const { data, error } = await supabase
        .from("book")
        .select('book_id, isbn, book_name, author_id, category_id, stock ( book_id, book_name )')
        .eq("book_id", book_id)
        .single();
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase
        .from("book")
        .insert([payload])
        .select();
        if (error) throw error;
        return data[0];
    },

    async update(book_id, payload) {
        const { data, error } = await supabase
        .from("book")
        .update(payload)
        .eq("book_id", book_id)
        .select();
        if (error) throw error;
        return data[0];
    },

    async remove(book_id) {
        const { data, error } = await supabase.from("book").delete().eq("book_id", book_id);
        if (error) throw error;
        return { message: "Book was deleted successfully" };
    },
};