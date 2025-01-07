import db from '$lib/db.js';

export const actions = {
    create: async ({ request }) => {
        let data = await request.formData();

        let club = {
            name: data.get('name'),
            yearOfEstablishment: data.get('yearOfEstablishment'),
            stadium: data.get('stadium'),
        };

        await db.createClub(club);

        return { success: true };
        
    }
}