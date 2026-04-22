import pool from '$lib/server/database.js';

export async function GET({ params }) {
	const id = params.id;

	const [rows] = await pool.query('SELECT * from events WHERE id=?', [id]);

	if (rows.length === 0) {
		return Response.json({ message: 'Event not found' }, { status: 404 });
	}
	return Response.json(rows[0]);
}
export async function DELETE({ params }) {
	const id = params.id;
	const [result] = await pool.query('DELETE FROM events WHERE id =?', [id]);
	if (result.affectedRows === 0) {
		return Response.json({ message: 'Event not found' }, { status: 404 });
	}
	return Response.json({ Message: 'Event is now successfully deleted!' });
}
export async function PUT({ params }) {
	const { id } = await params.id;
	const [result] = await pool.query(
		'UPDATE events SET name=? ,description=?, startdate=? , starttime=?, category=? ',
		[name, description, startdate, starttime, category]
	);
	if (result.affectedRows === 0) {
		return Response.json({ message: 'Event not found' }, { status: 404 });
	}
	return Response.json({ Message: 'Event is now successfully updated!' });
}
