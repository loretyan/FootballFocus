import db from '$lib/db';

export async function load() {
    return {
        players: await db.getPlayers()
    }
}