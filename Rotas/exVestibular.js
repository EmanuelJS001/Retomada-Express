const express = require('express')
const router = express.Router()

const ex = [
  {
    exercicio: "(FUVEST) Qual a metade de 2^22?",
    resolucao: "Metade de 2^22 = 2^22 ÷ 2 = 2^21",
    resposta: 2^21
  },
  {
    exercicio: "(FUVEST) Calcule 8^(2/3) + 9^(0,5).",
    resolucao: "8^(2/3) = (∛8)^2 = 2^2 = 4; 9^(0,5) = √9 = 3 → 4 + 3",
    resposta: 7
  },
  {
    exercicio: "(VUNESP) Qual o valor da expressão 5^(-1) − 1/2?",
    resolucao: "5^(-1) = 1/5 → 1/5 − 1/2 = (2/10 − 5/10) = -3/10",
    resposta: -0.3
  },
  {
    exercicio: "(UFPB) Sendo x^3 = 25 e y^2 = 27, calcular |x^(3/2) · y^(4/3)|.",
    resolucao: "x^(3/2) = (x^3)^(1/2) = √25 = 5; y^(4/3) = (y^2)^(2/3) = 27^(2/3) = 9 → |5 × 9|",
    resposta: 45
  },
  {
    exercicio: "(FUVEST) Se 4^16 · 5^25 = α · 10^n, com 1 ≤ α < 10, determine n.",
    resolucao: "4^16 = (2^2)^16 = 2^32. Então: 2^32 · 5^25 = (2^25 · 5^25) · 2^7 = 10^25 · 128 = 1,28 × 10^27",
    resposta: 27
  }
]
router.get('/exVestibular1', (req,res)=> res.json(ex[0]))
router.get('/exVestibular2', (req,res)=> res.json(ex[1]))
router.get('/exVestibular3', (req,res)=> res.json(ex[2]))
router.get('/exVestibular4', (req,res)=> res.json(ex[3]))
router.get('/exVestibular5', (req,res)=> res.json(ex[4]))

module.exports = router