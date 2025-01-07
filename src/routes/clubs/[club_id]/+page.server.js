import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load ( {params} ) {
    console.log( params.club_id );

    return {
        club: await db.getClub(params.club_id)
    }
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        let id = (data.get('id'));
        await db.deleteClub(id);
        redirect(303, '/clubs');
    }
}