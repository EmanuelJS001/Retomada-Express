const express = require('express')
const router = express.Router()

const ex = [
    { exercicio: "3^4", resolucao: "3 × 3 × 3 × 3 = 81", resposta: 81 },
    { exercicio: "2^6", resolucao: "2 × 2 × 2 × 2 × 2 × 2 = 64", resposta: 64 },
    { exercicio: "5^3", resolucao: "5 × 5 × 5 = 125", resposta: 125 },
    { exercicio: "4^3", resolucao: "4 × 4 × 4 = 64", resposta: 64 },
    { exercicio: "6^2", resolucao: "6 × 6 = 36", resposta: 36 },
    { exercicio: "7^2", resolucao: "7 × 7 = 49", resposta: 49 },
    { exercicio: "8^2", resolucao: "8 × 8 = 64", resposta: 64 },
    { exercicio: "9^2", resolucao: "9 × 9 = 81", resposta: 81 },
    { exercicio: "10^3", resolucao: "10 × 10 × 10 = 1000", resposta: 1000 },
    { exercicio: "2^8", resolucao: "2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256", resposta: 256 }
]

router.get('/ex1', (req,res)=> res.json(ex[0]))
router.get('/ex2', (req,res)=> res.json(ex[1]))
router.get('/ex3', (req,res)=> res.json(ex[2]))
router.get('/ex4', (req,res)=> res.json(ex[3]))
router.get('/ex5', (req,res)=> res.json(ex[4]))
router.get('/ex6', (req,res)=> res.json(ex[5]))
router.get('/ex7', (req,res)=> res.json(ex[6]))
router.get('/ex8', (req,res)=> res.json(ex[7]))
router.get('/ex9', (req,res)=> res.json(ex[8]))
router.get('/ex10', (req,res)=> res.json(ex[9]))

module.exports = router