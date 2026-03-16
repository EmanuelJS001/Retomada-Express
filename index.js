const express = require('express')
const app = express()

app.use(express.json())

const propriedades_router = require('./Rotas/propriedades.js')
const exercicios_router = require('./Rotas/exercicios.js')

app.use('/potencia', propriedades_router)
app.use('/', exercicios_router)
//localhost:3000/potencia/exercicio/:id?tipo=vestibular

app.post('/potencia', (req, res) => {
    let {exercicio, resolucao, resposta} = req.body

    res.send(`exercicio: ${exercicio} resolução: ${resolucao} resposta: ${resposta}`)
  })

app.listen(3000, ()=>{console.log("funfando em http://localhost:3000/potencia/propriedades")})