const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema(
    {
        "foodName": {type: String, require: true},
        "foodCode": {"type": String, "require": true},
        "foodImg": {"type": String, "require": true},
        "foodCategory": {"type": String, "require": true},
        "qty": {"type": String, "require": true},
        "price": {"type": String, "require": true},
    },
    {timestamps: true, versionKey: false}
);
const foods = mongoose.model("foods", FoodSchema);
module.exports = foods;