import express from "express"
import passport from "passport"

// models
import { FoodModel } from "../../database/Allmodels"

// validation
import { validateCategory, validateRestaurantById } from "../../validation/food";

const Router = express.Router();

/* 
 route   /r
 desc    get all food food based on particular restaurant
 params  _id
 method  GET
 Access  public
*/

Router.get("/r/:_id", async (req, res) => {
    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const foods = await FoodModel.find({ restaurant: _id });

        return res.json({ foods: foods });

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})

/* 
 route   /r
 desc    get all food food based on category
 params  category
 method  GET
 Access  public
*/

Router.get("/r/:category", async (req, res) => {
    try {
        await validateCategory(req.params);
        const { category } = req.params;
        const foods = await FoodModel.find(
            { category: { $regex: category, $options: "i" } })
        return res.json({foods});
    } catch (error) {
        return res.status(500).json({error:error.message});

    }


})
export default Router;