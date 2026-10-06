import { supabase } from "../config/supabaseClient.js";

export const CategoryModel = {
    async create(category_name) {
        const { data, error } = await supabase
        .from("category")
        .insert({ category_name })
        .select()
        .single();
        if (error) throw error;
        return data;
    },

    async getAll() {
        const { data, error } = await supabase
        .from("category")
        .select("*")
        if (error) throw error;
        return data;
    },

    async getById(category_id) {
        const { data, error } = await supabase
        .from("category")
        .select("*")
        .eq("category_id", category_id)
        .single();
        if (error) throw error;
        return data;
    },

    async update(category_id, category_name) {
        const { data, error } = await supabase 
        .from("category")
        .update({ category_name })
        .eq("category_id", category_id)
        .select()
        .single();
        if (error) throw error;
        return data;
    },

    async remove(category_id) {
        const { error } = await supabase.from("category").delete().eq("category_id", category_id);
        if (error) throw error;
        return { message: "Category deleted "};
    },
};