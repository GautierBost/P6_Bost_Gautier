const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");

//route creation d'un compte utilisateur
router.post("/signup", userCtrl.signup);

//route connexion a un compte utilisateur
router.post("/login", userCtrl.login);

module.exports = router;
