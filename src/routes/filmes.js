const express = require("express");
const router = express.Router();

const filmes = [
    {
        "nome": "Ben 10",
    },
    {
        "nome": "Clube da luta",
    }
];

router.route("/filmes").get((req, res) => {
    res.json(filmes); // 'res.json()' é o correto para enviar um array ou objeto JSON
});

module.exports = router;