const express = require('express')
const router = express.Router()

const ex = [
    {
        exercicio: "O número que deve ser somado a 456788² para obter 456789².",
        resolucao: "456789² - 456788² = (456789 + 456788)(456789 - 456788) = (913577)(1)",
        resposta: 913577
    },
    {
        exercicio: "Qual é o algarismo das unidades de 9^10?",
        resolucao: "As potências de 9 terminam em ciclo: 9, 1, 9, 1... Como 10 é par, termina em 1.",
        resposta: 1
    },
    {
        exercicio: "Sabendo que 5^7 = 78125, calcule 5^8.",
        resolucao: "5^8 = 5^7 × 5 = 78125 × 5",
        resposta: 390625
    },
    {
        exercicio: "Calcule o valor da expressão: 4^3^2.",
        resolucao: "Primeiro resolvemos o expoente: 3² = 9 → então 4^9",
        resposta: 262144
    },
    {
        exercicio: "Calcule a expressão: 8^5 − (−5)^2 + 3^1 + 4^0 + 2^-1.",
        resolucao: "8^5=32768, (−5)^2=25, 3^1=3, 4^0=1, 2^-1=0,5 → 32768−25+3+1+0,5",
        resposta: 32747.5
    }
]

router.get('/exVestibular1', (req,res)=> res.json(ex[0]))
router.get('/exVestibular2', (req,res)=> res.json(ex[1]))
router.get('/exVestibular3', (req,res)=> res.json(ex[2]))
router.get('/exVestibular4', (req,res)=> res.json(ex[3]))
router.get('/exVestibular5', (req,res)=> res.json(ex[4]))

module.exports = router