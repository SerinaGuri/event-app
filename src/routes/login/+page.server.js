import { fail, redirect } from '@sveltejs/kit';
import pool from '$lib/server/database.js';
import { verifyPassword , createSession} from '$lib/server/auth';

export const actions = {
	login: async ({ request, cookies }) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

        console.log('fsdfsdf')

		if (!username || !password) {
			return fail(400, { error: 'Bitte alle Felder ausfuellen' });
		}

        console.log(username, password)

		// find user in database
		const [rows] = await pool.execute('SELECT * from users WHERE username = ?', [username]);

		if (rows.length === 0) {
			return fail(400, { error: 'Username not found' });
		}

		//chaeck if the password id correct
		if (!(await verifyPassword(password, rows[0].password_hash))) {
			return fail(400, { error: 'Password is not correct' });
		}

		// Create session and session cookie
		const sessionId = await createSession(rows[0].id);
		cookies.set('session', sessionId, { path: '/', maxAge: 60 * 60 * 24 * 30 });

		//redirect
		redirect(303, '/admin/events');
	}
};
