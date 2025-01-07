import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    console.log(params.player_id);

    return {
        player: await db.getPlayer(params.player_id)
    }
}

export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();

        let player = {
            _id: data.get('id'),
            name: data.get('name'),
            value: data.get('value'),
            age: data.get('age'),
            position: data.get('position'),
            club: data.get('club'),
        };

        console.log(player);

        await db.updatePlayer(player);

        return { success: true };
    }
}