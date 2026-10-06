import { supabase } from "../config/supabaseClient.js";

export const MemberModel = {
    async getAll() {
        const { data, error } = await supabase
        .from("member")
        .select("member_id, member_name, phone, email, address");
        if (error) throw error;
        return data;
    },

    async getById(member_id) {
        const { data, error } = await supabase
        .from("member")
        .select('*')
        .eq("member_id", member_id)
        .single();
        if (error) throw error;
        return data;
    },

    async create(payload) {
        const { data, error } = await supabase
        .from("member")
        .insert([payload])
        .select();
        if (error) throw error;
        return data[0];
    },

    async update(member_id, payload) {
        const { data, error } = await supabase
        .from("member")
        .update(payload)
        .eq("member_id", member_id)
        .select();
        if (error) throw error;
        return data[0];
    },

    async remove(member_id) {
        const { data, error } = await supabase.from("member").delete().eq("member_id", member_id);
        if (error) throw error;
        return { message: "Member was deleted successfully" };
    },
};