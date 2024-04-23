const express = require("express")
const foodController = require("../controllers/foodController");
const router = express.Router();
router.post("/createFood", foodController.createFood)
router.get("/readFood", foodController.readFood)
router.get("/readBYId/:id", foodController.readBYId)
router.post("/updateFood/:id", foodController.updateFood)
router.get("/deleteFood/:id", foodController.deleteFood)

module.exports = router