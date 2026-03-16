const express = require('express')
const router = express.Router()

const normal = [
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

const vestibular = [
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

router.get("/exercicio/:id", (req, res) => {
  let id = (req.params.id) - 1;
  const tipo = req.query.tipo; 

  let lista;

  if (tipo === "vestibular") {
    lista = (vestibular);
  } else if (tipo === "normal") {
    lista = (normal);
  }
  const exercicio = lista[id];

  res.json(exercicio);
});

module.exports = router