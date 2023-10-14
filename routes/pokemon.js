const router = require("express").Router();
const pokeControllers = require("../controllers/pokemon");

router.get("/pokemon/:poke",pokeControllers.getPokemon);

module.exports=router;