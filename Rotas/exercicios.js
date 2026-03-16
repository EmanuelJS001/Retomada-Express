const express = require('express')
const router = express.Router()

const ex = [
  {
    exercicio: "5^2 × 5^3",
    resolucao: "Mesma base → somamos os expoentes: 5^(2+3) = 5^5 = 3125",
    resposta: 3125
  },
  {
    exercicio: "7^5 ÷ 7^2",
    resolucao: "Mesma base → subtraímos os expoentes: 7^(5-2) = 7^3 = 343",
    resposta: 343
  },
  {
    exercicio: "(4^2)^3",
    resolucao: "Potência de potência → multiplicamos os expoentes: 4^(2×3) = 4^6 = 4096",
    resposta: 4096
  },
  {
    exercicio: "(3 × 5)^2",
    resolucao: "Potência de produto → distribuímos o expoente: 3^2 × 5^2 = 9 × 25 = 225",
    resposta: 225
  },
  {
    exercicio: "3^-3",
    resolucao: "Expoente negativo → inverso da potência: 1 / 3^3 = 1/27",
    resposta: "1/27"
  },
  {
    exercicio: "2^4 × 2^3",
    resolucao: "Mesma base → somamos os expoentes: 2^(4+3) = 2^7 = 128",
    resposta: 128
  },
  {
    exercicio: "10^6 ÷ 10^2",
    resolucao: "Mesma base → subtraímos os expoentes: 10^(6-2) = 10^4 = 10000",
    resposta: 10000
  },
  {
    exercicio: "(5^2)^2",
    resolucao: "Potência de potência → multiplicamos os expoentes: 5^(2×2) = 5^4 = 625",
    resposta: 625
  },
  {
    exercicio: "(2 × 4)^3",
    resolucao: "Potência de produto → 2^3 × 4^3 = 8 × 64 = 512",
    resposta: 512
  },
  {
    exercicio: "6^-2",
    resolucao: "Expoente negativo → 1 / 6^2 = 1/36",
    resposta: "1/36"
  }
]

router.get('/exercicio/:id', (req,res)=> {
  let id =req.params.id
  id = id - 1
  res.json(ex[id])
})

module.exports = router