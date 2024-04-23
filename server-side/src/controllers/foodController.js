const foods = require("../models/foodModel");
exports.createFood = async (req, res) => {
    try {
        let foodData = req.body;
        await foods.create(foodData)
        res.json({status: "success", message: "Created data successfully"});
    } catch (e) {
        res.json({status: "fail", message: e});
    }
}
exports.readFood = async (req, res) => {
    try {
        let foodData = await foods.find({}, {createdAt: 0, updatedAt: 0});
        res.json({status: "success", message: foodData});
    } catch (e) {
        res.json({status: "fail", message: e});
    }
}
exports.readBYId = async (req, res) => {
    try {
        let {id} = req.params
        const foodData = await foods.find(
            {_id: id}, {createdAt: 0, updatedAt: 0}
        );
        res.json({status: "success", message: foodData});
    } catch (e) {
        res.json({status: "Fail", message: e});
    }
}
exports.updateFood = async (req, res) => {
    try {
        let {id} = req.params
        let updatedData = req.body;
        await foods.updateOne({_id: id}, updatedData)
        res.json({status: "success", message: "Successfully updated"});
    } catch (e) {
        res.json({status: "Fail", message: e});
    }
}
exports.deleteFood = async (req, res) => {
    try {
        let {id}=req.params
        await foods.deleteOne({_id:id});
        res.json({status:"success",message:"Deleted data Successfully"});
    } catch (e) {
        res.json({status: "Fail", message: e});
    }
}