import express from "express";
import passport from "passport";

// models
import { OrderModel } from "../../database/Allmodels";


// imoprt validatoins
import { validateRestaurantById } from "../../validation/food";
import { validateOderData } from "../../validation/orders";

const Router = express.Router();


/* 
 route   /
 desc    get all orders based on user id
 params  /_id
 method  GET
 Access  public
*/
Router.get("/:_id",
passport.authenticate("jwt" , {session:false}) ,
 async (req, res) => {

    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const getOrders = await OrderModel.findOne({ user: _id });
        if (!getOrders) {
            return res.status(404).json({ error: "user not found " });
        }
        return res.status(200).json({ getOrders });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})

/*
 route   /new
 desc    update orders based on user id
 params  /_id
 method  POST
 Access  public
*/

Router.post("/new/:_id", async (req, res) => {
    try {
        await validateRestaurantById(req.params);
        await validateOderData(req.body);
        const { _id } = req.params;
        const { orderDetails } = req.body;
        const addNewOrder = await OrderModel.findOneAndUpdate(
            {
                user : _id
            },
            {
                $push :{orderDetails}
            },
            {new:true}
        )
        return res.status(200).json({addNewOrder});
    } catch (error) {
        return res.status(500).json({error:error.message});
    }
})

export default Router;