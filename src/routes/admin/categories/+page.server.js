import pool from '$lib/server/database.js';
 
export async function load() {
    const [rows] =  await pool.execute('SELECT * FROM Categories');
 
    return {
        pageTitle: "List of Categories",
        categories: rows
    };
 
}
 
export const actions = {
    delete: async ({ request }) => {
        const formData = await request.formData();
        const id = formData.get('id');
        await pool.execute('DELETE FROM Categories WHERE id = ?', [id]);
 
        return {
            success: true
        };
       
    }
}
 