import express from 'express'
import { db } from './connection.js';
import cors from 'cors';

const app = express();
app.use(cors());

const pokemonCollection = await db.collection("arrayPokemon").find({}).toArray();
const typeCollection = await db.collection("arrayTypes").find({}).toArray();

app.get('/', async (requisicao, resposta) => {
    resposta.send(pokemonCollection);
})

app.get('/gen1/:id', async (requisicao, resposta) => {
    const id = requisicao.params.id;
    const pokemon = pokemonCollection.find((el) => el.id === id);

    if(!pokemon) {
        resposta.status(404).send("Pokémon com esse id não catalogado!")
        return;
    }
    
    resposta.status(200).send(pokemon);
})

app.get('/tipo', async (req, res) => {
    res.send(typeCollection)
})

app.get('/tipo/:tipo', async (req, res) => {
    const tipo = req.params.tipo;
    const pageType = typeCollection.find(el => el.type === tipo);

    if(!pageType) {
        res.status(404).send("Esse tipo não existe!");
        return;
    }

    res.status(200).send(pageType);
})

app.listen(5000, () => console.log("Servidor rodando na porta 5000"));