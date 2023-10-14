const router = require("express").Router();
const homeControllers = require("../controllers/home");

router.get("/",homeControllers.getHome);
router.post("/",homeControllers.postHome);

module.exports=router;