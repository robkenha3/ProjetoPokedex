import express from 'express'
import { db } from './connection.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

//const pokemonCollection = await db.collection("arrayPokemon").find({}).toArray(); pokemonCollection é uma cópia do array do banco! Assim se declarar fora vai puxar os dados do banco apenas uma vez
const typeCollection = await db.collection("arrayTypes").find({}).toArray();

app.get('/', async (requisicao, resposta) => {
    const pokemonCollection = await db.collection("arrayPokemon").find({}).toArray(); //declarar dentro de uma rota vai atualizar e puxar os dados do banco toda vez que acessar essa rota (os dados do banco vem atualizado)
    resposta.send(pokemonCollection);
})

app.get('/gen1/:id', async (requisicao, resposta) => {
    const id = requisicao.params.id;
    const pokemonCollection = await db.collection("arrayPokemon").find({}).toArray();
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

app.get("/gen1", async(req, res) => {
    const pokemonCollection = await db.collection("arrayPokemon").find({}).toArray();
    res.send(pokemonCollection);
})

app.get("/gen2", async(req, res) => {
    const pokemonCollection = await db.collection("arrayPokemon").find({}).toArray();
    res.send(pokemonCollection);
})

app.post("/gen2", async (req, res) => {
    const newPokemon = req.body;
    const addData = await db.collection("arrayPokemon").insertOne(newPokemon);
    // pokemonCollection.push(newPokemon);
    res.status(200).send(addData);
})
app.listen(5000, () => console.log("Servidor rodando na porta 5000"));