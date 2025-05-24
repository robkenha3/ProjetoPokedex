import { db } from '../db/connection.js'

const pokemonCollection = db.collection('arrayPokemon');

export const PokemonDAO = {
    //Get all pokemons
    getAll: async() => {
        return (await pokemonCollection.find({}).toArray()).sort((a, b) => parseInt(a.id) - parseInt(b.id));
    },

    //Get one pokemon
    getById: async(id) => {
        return await pokemonCollection.findOne({id: id});
    },

    //Insert many pokemons
    insertMany: async(pokemons) => {
        return await pokemonCollection.insertMany(pokemons);
    },

    //Insert one pokemon
    insert: async(pokemon) => {
        return await pokemonCollection.insertOne(pokemon);

    },

   

//Delete item by id

//Update item by id


}