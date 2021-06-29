const express = require("express");
const router = express.Router();
const mainController = require("../app/controllers/main.js")
const areaController = require("../app/controllers/area.js")
const cursoController= require("../app/controllers/curso.js")

router.get("/"              , mainController.index);
router.get("/sobre"         , mainController.sobre);
router.get("/ui"            , mainController.ui);
router.get("/game"          , mainController.game);


router.get("/area"          , areaController.index);


router.get("/curso"             , cursoController.index);
router.get("/curso/create"      , cursoController.create);
router.post("/curso/create"     , cursoController.create);
router.get("/curso/:id"         , cursoController.read);
router.get("/curso/update/:id"  , cursoController.update);
router.post("/curso/update/:id" , cursoController.update);
router.get("/curso/delete/:id" , cursoController.del);

module.exports= router; //define como será exportado