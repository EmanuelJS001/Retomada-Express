const express = require('express')
const router = express.Router()

const propriedades = [
    {
        nome: "Multiplicação de potências de mesma base",
        explicacao: "Quando multiplicamos potências que possuem a mesma base, mantemos a base e somamos os expoentes.",
        formula: "a^m × a^n = a^(m+n)",
        exemplo: "5^2 × 5^3 = 5^(2+3) = 5^5 = 3125"
    },
    {
        nome: "Divisão de potências de mesma base",
        explicacao: "Quando dividimos potências de mesma base, mantemos a base e subtraímos os expoentes.",
        formula: "a^m ÷ a^n = a^(m-n)",
        exemplo: "7^5 ÷ 7^2 = 7^(5-2) = 7^3 = 343"
    },
    {
        nome: "Potência de potência",
        explicacao: "Quando uma potência é elevada a outro expoente, mantemos a base e multiplicamos os expoentes.",
        formula: "(a^m)^n = a^(m × n)",
        exemplo: "(4^2)^3 = 4^(2×3) = 4^6 = 4096"
    },
    {
        nome: "Potência de um produto",
        explicacao: "Quando um produto está dentro de uma potência, o expoente pode ser aplicado separadamente a cada fator.",
        formula: "(a × b)^m = a^m × b^m",
        exemplo: "(3 × 5)^2 = 3^2 × 5^2 = 9 × 25 = 225"
    },
    {
        nome: "Expoente negativo",
        explicacao: "Um expoente negativo indica o inverso da potência positiva correspondente.",
        formula:"a^(-n) = 1 / a^n",
        exemplo: "3^(-3) = 1 / 3^3 = 1/27"
    }
]

router.get('/propriedades', (req, res) => {
    res.json(propriedades)
})

module.exports = router