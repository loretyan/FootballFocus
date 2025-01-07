import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    console.log(params.player_id);

    return {
        player: await db.getPlayer(params.player_id)
    }
}

export const actions = {
    delete: async ({ request }) => {
        const data = await request.formData();
        let id = (data.get('id'));
        await db.deletePlayer(id);
        redirect(303, '/players');
    }
}