// libraries
import express from "express"
import passport from "passport"

// importing models
import { RestaurantModel } from "../../database/Allmodels"

// validations
import { validateRestaurantCity ,validateRestaurantSearchString } from "../../validation/restaurant";
import { validateRestaurantById } from "../../validation/food";

const Router = express.Router();

/* 
 route   /
 desc    get all restaurants based on the location
 params  NONE
 method  GET
 Access  public
*/

Router.get("/", async (req, res) => {
    try {
        await validateRestaurantCity(req.query);
        const { city } = req.query;
        const restaurants = await RestaurantModel.find({ city });
        return res.json({ restaurants });

    } catch (error) {
        return res.status(500).json({ error: error.msg });
    }

})

/* 
 route   /
 desc    get a restaurant based on the id
 params  _id
 method  GET
 Access  public
*/

Router.get("/:_id", async (req, res) => {
    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const restaurant = await RestaurantModel.findOne( _id );
        if (!restaurant) {
            res.status(404).json({ error: "Restaurant Not Found.." });
        }
        return res.json({ restaurant });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


/* 
 route   /search
 desc    get a restaurant based on the search
 params  NONE
 method  GET
 body    searchString
 Access  public
*/

Router.get("/search", async (req, res) => {
    try {
        await validateRestaurantSearchString(req.body);
        const { serachString } = req.body;
        const restaurant = await RestaurantModel.find(
            { name: { $regex: serachString, $options: "i" } });
        if (!restaurant) {
            res.status(404).json(`Restaurants not found for the ${serachString}`);
        }
        return res.json({ restaurant });

    } catch (error) {
        return res.status(500).json({ error: error.message });

    }


})

export default Router;
