const express = require('express')
const router = express.Router();
const dados = require('./dados.json')
const lista = require('./lista.json')

//Exercício: Consultando Casa
router.get('/got', function(req, resp){ 
    const queryPersonagem = req.query.personagem
    dados.filter(function(x){
        if(x.slug == queryPersonagem){
            resp.send(x.name)
        }
    })
    
})

//Exercício: Lista de Compras Express
router.get('/lista', function(req, resp, next){
    const queryQuantidade = req.query.quantidade
    if(queryQuantidade > 0 && queryQuantidade <= 15) {
        req.quantidade = queryQuantidade
    } else {
        req.quantidade = parseInt(Math.random() * 15) + 1
    }
    next()
})

router.get('/lista', function(req, resp){
    let resultado = lista.slice(0, req.quantidade)
    resp.json(resultado)
})

module.exports = router