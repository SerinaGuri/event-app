import { redirect } from '@sveltejs/kit';
import { invalidateSession} from '$lib/server/auth';

export const actions = {
	logout: async ({ cookies }) => {
		const sessionId = cookies.get('session');
		if (sessionId) {
			await invalidateSession(sessionId);
			cookies.delete('session', { path: '/' });
		}
		redirect(303, '/');
	}
};
