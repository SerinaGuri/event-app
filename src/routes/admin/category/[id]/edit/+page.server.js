import pool from '$lib/server/database.js';
import {redirect} from '@sveltejs/kit';

export async function load ({ params }) {
    let CategoryId = params.id;

    const [rows] = await pool.execute('SELECT * FROM Categories WHERE id= ?', [CategoryId]);
     if (rows.length===0){
        return{
            status: new Error ('Category not found')
        };
     }
     return{
        Category:rows[0]
     };
}

export const actions ={
    edit: async ({request, params}) => {
        const formData = await request.formData();
        const name = formData.get('name');
        const id = params.id;

        await pool.execute('Update Categories SET name = ? WHERE id = ?',
            [name, id]
        );
        redirect(303, '/admin/categories');
    }
};