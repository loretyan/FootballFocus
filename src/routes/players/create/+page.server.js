import db from '$lib/db.js';

export const actions = {
    create: async ( {request}) => {
        let data = await request.formData();

        let player = {
            name: data.get('name'),
            value: data.get('value'),
            age: data.get('age'),
            position: data.get('position'),
            club: data.get('club'),
        };

        await db.createPlayer(player);

        return { success: true };
    }
}