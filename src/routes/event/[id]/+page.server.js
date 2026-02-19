import pool from '$lib/server/database.js';

export async function load ({ params }) {
    let eventId = params.id;

    const [rows] = await pool.execute('SELECT * FROM events WHERE id= ?', [eventId]);
     if (rows.length===0){
        return{
            status: new Error ('Event not found')
        };
     }
     return{
        event:rows[0]
     };
}