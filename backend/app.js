const express = require("express");
const cors = require("cors");
require("dotenv").config({ path: "../.env" });

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rutas
const routes = require("./routes/routes");
app.use(routes);

app.get("/", (req, res) => {
  res.send("Backend arranco");
});

// Levantar servidor
const PORT = parseInt(process.env.PORT, 10) || 3001;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});