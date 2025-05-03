import { db } from "./connection.js";
import { arrayTypes } from '../frontend/src/assets/database/arrayTypes.js';
import { arrayPokemon } from '../frontend/src/assets/database/pokemon151.js';

const responseArrayPokemon = await db.collection('arrayPokemon').insertMany(arrayPokemon);
const responseArrayTypes = await db.collection('arrayTypes').insertMany(arrayTypes);

console.log(responseArrayPokemon);
console.log(responseArrayTypes);