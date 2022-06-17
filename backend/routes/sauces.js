const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");
const sauceCtrl = require("../controllers/sauces");

//route affihage de toutes les sauces
router.get("/", auth, sauceCtrl.getAllSauces);

//route création d'une sauce
router.post("/", auth, multer, sauceCtrl.createSauce);

//route affichage d'une seule sauce
router.get("/:id", auth, sauceCtrl.getOneSauce);

//route modification d'une sauce
router.put("/:id", auth, multer, sauceCtrl.modifySauce);

//route suppression d'une sauce
router.delete("/:id", auth, sauceCtrl.deleteSauce);

//route like
router.post("/:id/like", auth, sauceCtrl.likeSauce);

module.exports = router;
