const express = require("express");
const router = express.Router();

const sauceCtrl = require("../controllers/sauces");

//route affihage de toutes les sauces
router.get("/", sauceCtrl.getAllSauces);

//route création d'une sauce
router.post("/", sauceCtrl.createSauce);

//route affichage d'une seule sauce
router.get("/:id", sauceCtrl.getOneSauce);

//route modification d'une sauce
router.put("/:id", sauceCtrl.modifySauce);

//route suppression d'une sauce
router.delete("/:id", sauceCtrl.deleteSauce);

module.exports = router;
