import pool from '$lib/server/database.js';

export async function load(){
    const [rows] =await pool.execute('SELECT e.description as description,e.id as id,c.name as category_name, e.name as name FROM events e LEFT JOIN Categories c ON c.id=e.category_id');


    return{
        events: rows
    };
}