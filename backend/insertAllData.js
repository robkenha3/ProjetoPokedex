import { arrayTypes } from './incrementalArrayTypes.js';
import { arrayPokemon } from './incrementalPokemons.js';
import { PokemonDAO } from './dao/PokemonDAO.js';
import { TypeDAO } from './dao/TypeDAO.js';


async function insertManyPokemons() {
    try {
        const allPokemonsMongo = await PokemonDAO.getAll();        
        const newPokemons = [...arrayPokemon]; // mantemos os objetos completos  

        // Extrai os IDs existentes do Mongo
        const existencePokemonsId = allPokemonsMongo.map(p => p.id);
        
        // Filtra apenas os pokémons que ainda não estão no Mongo
        const newPokemonsInclude = newPokemons.filter(pokemon => !existencePokemonsId.includes(pokemon.id));

        if (newPokemonsInclude.length === 0) {
          console.log("Nenhum novo Pokémon para inserir.");
          return;
        } 

        // Insere os novos no Mongo
        const resultado = await insertManyItems("arrayPokemon", newPokemonsInclude);
        console.log("Pokémons inseridos com sucesso:", resultado.insertedCount);
    } catch (erro) {
        console.error("Erro ao inserir Pokémons:", erro);
    }
}


async function insertManyPokemonsTypes() {
    try {
        const allPokemonsMongoTypes = await TypeDAO.getAll();        
        const newPokemonsTypes = [...arrayTypes]; // mantemos os objetos completos  
        // console.log(newPokemonsTypes)

        // Extrai os IDs existentes do Mongo
        const existencePokemonsIdTypes = allPokemonsMongoTypes.map(p => p.id);

        // Filtra apenas os tipos que ainda não estão no Mongo
        const newPokemonsIncludeTypes = newPokemonsTypes.filter(types => !existencePokemonsIdTypes.includes(types.id));
        
        if (newPokemonsIncludeTypes.length === 0) {
          console.log("Nenhum novo Tipo para inserir.");
          return;
        }       

        // Insere os novos tipos no Mongo
        const resultado = await insertManyItems("arrayTypes", newPokemonsIncludeTypes);
        console.log("Tipos inseridos com sucesso:", resultado.insertedCount);
    } catch (erro) {
        console.error("Erro ao inserir Tipo:", erro);
    }
}

// async function deleteMany() {
//     await db.collection('arrayTypes').deleteMany({});
// }


insertManyPokemons();
insertManyPokemonsTypes();
// deleteMany();