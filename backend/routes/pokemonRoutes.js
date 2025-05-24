import express from 'express';
import { PokemonDAO } from "../dao/PokemonDAO.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const pokemons = await PokemonDAO.getAll();
    res.send(pokemons);
})

router.get('/:gen', async(req, res) => {
    const gen = req.params.gen;
    // console.log(gen)
    const pokemons = await PokemonDAO.getAll();
    let pokemonsgen = [];
    if(gen === 'gen1') {
        pokemonsgen = pokemons.filter(el => parseInt(el.id) <= 151);
    }
    if(gen === 'gen2') {
        pokemonsgen = pokemons.filter(el => parseInt(el.id) > 151 && parseInt(el.id) <= 251);
    }
    if(gen === 'gen3') {
        pokemonsgen = pokemons.filter(el => parseInt(el.id) > 251 && parseInt(el.id) <= 386);
    }
    res.send(pokemonsgen);
})

router.get('/:gen/:id', async(req, res) => {
    // const gen = req.params.gen;
    const id = req.params.id;
    // console.log(gen)
    const pokemons = await PokemonDAO.getById(id);    

    if(!pokemons) {
        res.status(404).send("Pokémon com esse id não catalogado!")
        return;
    }
    
    res.status(200).send(pokemons);
})

export default router;