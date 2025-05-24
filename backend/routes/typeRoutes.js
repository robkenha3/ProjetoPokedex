import express from 'express'
import { TypeDAO } from "../dao/TypeDAO.js";

const router = express.Router();

router.get('/', async (req, res) => {
    const types = await TypeDAO.getAll();
    res.send(types);
})

router.get('/:tipo', async(req, res) => {
    const tipo = req.params.tipo;
    const formatedTipo = tipo[0].toUpperCase() + tipo.slice(1).toLowerCase()
    const type = await TypeDAO.getByType(formatedTipo);
    // console.log(type)

    if(!type) {
        res.status(404).send("Tipo não encontrado");
        return;
    }
    
    res.status(200).send(type);
})





export default router;