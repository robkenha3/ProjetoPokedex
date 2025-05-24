import axios from 'axios';

const URL = "http://localhost:5000/";
const responsePokemon = await axios.get(`${URL}`);
const responseTypes = await axios.get(`${URL}tipo`);
// console.log(responsePokemon)

export const arrayPokemon = responsePokemon.data;
export const arrayTypes = responseTypes.data;

// console.log(responseTypes)