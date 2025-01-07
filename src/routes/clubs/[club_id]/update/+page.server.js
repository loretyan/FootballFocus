import db from '$lib/db.js';
import { redirect } from '@sveltejs/kit';

export async function load({ params }) {
    console.log(params.club_id);

    return {
        club: await db.getClub(params.club_id)
    }
}

export const actions = {
    update: async ({ request }) => {
        const data = await request.formData();

        let club = {
            _id: data.get('id'),
            name: data.get('name'),
            yearOfEstablishment: data.get('yearOfEstablishment'),
            stadium: data.get('stadium'),
        };

        console.log(club);

        await db.updateClub(club);

        return { success: true };
    }
}