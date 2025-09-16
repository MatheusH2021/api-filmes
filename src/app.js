const express = require("express"); 
const app = express();

app.use(express.json());

const routes = require("./routes/filmes");

app.use("/api", routes);

app.listen(3000, () => {
    console.log("API-FILMES rodando na porta 3000");
});
