const express = require('express')
const app = express()

const propriedades_router = require('./Rotas/propriedades.js')
const exercicios_router = require('./Rotas/exercicios.js')
const exVestibular_router = require('./Rotas/exVestibular.js')


app.use('/potencia', propriedades_router)
app.use('/potencia', exercicios_router)
app.use('/potencia', exVestibular_router)


app.listen(3000, ()=>{console.log("funfando na porta 3000")})