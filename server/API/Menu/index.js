import passport from "passport";
import express from "express"

// models
import { MenuModel, ImageModel } from "../../database/Allmodels";

// validations
import { validateRestaurantById } from "../../validation/food";

const Router = express.Router();

/* 
 route   /list
 desc    get list of menu based on id
 params  _id
 method  GET
 Access  public
*/

Router.get("/list/:_id", async (req, res) => {
    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const menu = await MenuModel.findOne(_id);

        return res.json({ menu });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})

/* 
 route   /image
 desc    get list of menu images based on id
 params  _id
 method  GET
 Access  public
*/

Router.get("/image/:_id", (req, res) => {
    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const menuImages = ImageModel.findOne(_id);

        return res.json({ menuImages });
    } catch (error) {
        return res.status(500).json({error : error.messsage});

    }

})

export default Router;