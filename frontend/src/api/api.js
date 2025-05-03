import axios from 'axios';

const URL = "http://localhost:5000/";
const responsePokemon = await axios.get(`${URL}`);
const responseTypes = await axios.get(`${URL}tipo`);

export const arrayPokemon = responsePokemon.data;
export const arrayTypes = responseTypes.data;

// console.log(responseTypes)

