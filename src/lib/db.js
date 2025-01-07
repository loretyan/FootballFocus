import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("FootballDB"); // select database

// Clubs

// Get all clubs
async function getClubs() {
  let clubs = [];
  try {
    const collection = db.collection("clubs");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    clubs = await collection.find(query).toArray();
    clubs.forEach((club) => {
      club._id = club._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return clubs;
}

// Get club by id
async function getClub(id) {
  let club = null;
  try {
    const collection = db.collection("clubs");
    const query = { _id: new ObjectId(id) }; // filter by id
    club = await collection.findOne(query);

    if (!club) {
      console.log("No club with id " + id);
      // TODO: errorhandling
    } else {
      club._id = club._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return club;
}

// create club
async function createClub(club) {
  club.logo = "/images/clubs/clubplaceholder.png"; // default logo
  club.players = {
    goalkeeper: [],
    defender: [],
    midfielder: [],
    attacker: []
  };
  try {
    const collection = db.collection("clubs");
    const result = await collection.insertOne(club);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete player by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deleteClub(id) {
  try {
    const collection = db.collection("clubs");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No club with id " + id);
    } else {
      console.log("Club with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update player
// returns: id of the updated player or null, if player could not be updated
async function updateClub(club) {
  try {
    let id = club._id;
    delete club._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("clubs");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: club });

    if (result.matchedCount === 0) {
      console.log("No club with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Club with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// Players

// Get all players
async function getPlayers() {
  let players = [];
  try {
    const collection = db.collection("players");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    players = await collection.find(query).toArray();
    players.forEach((player) => {
      player._id = player._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return players;
}

// Get player by id
async function getPlayer(id) {
  let player = null;
  try {
    const collection = db.collection("players");
    const query = { _id: new ObjectId(id) }; // filter by id
    player = await collection.findOne(query);

    if (!player) {
      console.log("No player with id " + id);
      // TODO: errorhandling
    } else {
      player._id = player._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return player;
}

// create player
async function createPlayer(player) {
  player.portrait = "/images/players/placeholder.png"; // default portrait
  try {
    const collection = db.collection("players");
    const result = await collection.insertOne(player);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// update player
// returns: id of the updated player or null, if player could not be updated
async function updatePlayer(player) {
  try {
    let id = player._id;
    delete player._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("players");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: player });

    if (result.matchedCount === 0) {
      console.log("No player with id " + id);
      // TODO: errorhandling
    } else {
      console.log("Player with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete player by id
// returns: id of the deleted movie or null, if movie could not be deleted
async function deletePlayer(id) {
  try {
    const collection = db.collection("players");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No player with id " + id);
    } else {
      console.log("Player with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getClubs,
  getClub,
  createClub,
  deleteClub,
  updateClub,
  getPlayers,
  getPlayer,
  createPlayer,
  updatePlayer,
  deletePlayer,
};
