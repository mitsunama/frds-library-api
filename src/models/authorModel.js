import { supabase } from "../config/supabaseClient.js";

export const AuthorModel = {
    async create(author_name) {
        const { data, error } = await supabase
        .from("author")
        .insert({ author_name })
        .select()
        .single();
        if (error) throw error;
        return data;
    },

    async getAll() {
        const { data, error } = await supabase
        .from("author")
        .select("*")
        if (error) throw error;
        return data;
    },

    async getById(author_id) {
        const { data, error } = await supabase
        .from("author")
        .select("*")
        .eq("author_id", author_id)
        .single();
        if (error) throw error;
        return data;
    },

    async update(author_id, author_name) {
        const { data, error } = await supabase 
        .from("author")
        .update({ author_name })
        .eq("author_id", author_id)
        .select()
        .single();
        if (error) throw error;
        return data;
    },

    async remove(author_id) {
        const { data, error } = await supabase
        .from("author")
        .delete()
        .eq("author_id", author_id)
        .select();

        if (error) throw error;
        if (!data || data.length === 0) throw new Error("Author not found");
        return { message: "Author deleted "};
    },
};