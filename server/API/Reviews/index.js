import express from "express";
import passport from "passport";

// models
import { ReviewModel, FoodModel } from "../../database/Allmodels";

const Router = express.Router();


/* 
 route   /new
 desc    get all orders based on user id
 params  NONE
 Body    Review object
 method  POST
 Access  public
*/
Router.post("/new", async (req, res) => {
    try {
        const { reviewData } = req.body;
        await ReviewModel.create(reviewData);

        return res.status(200).json({ message: "successfully review created  " });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})


/* 
 route   /delete
 desc    delete review comment
 params  _id
 method  Delete
 Access  public
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await ReviewModel.findByIdAndDelete(_id);

        return res.status(200).json({ delete: "review succesfully deleted ..." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})
export default Router;