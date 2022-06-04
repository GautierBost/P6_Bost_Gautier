const express = require("express");
const mongoose = require("mongoose");

const sauceRoutes = require("./routes/sauces");

const app = express();

app.use(express.json());

//connexion base de données
mongoose
  .connect(
    "mongodb+srv://piiquante:Piiquante.2022@cluster0.x0h2y.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

//evite les erreurs CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//defini les routes
app.use("/api/sauces", sauceRoutes);

module.exports = app;
