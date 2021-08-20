import express from "express";
import passport, { session } from "passport";

// models
import { UserModel } from "../../database/Allmodels";

// validation 
import { validateRestaurantById } from "../../validation/food";


const Router = express.Router();
/* 
 route   /
 desc    get specific user details
 params  _id
 Body    NONE
 method  Get
 Access  public
*/

Router.get("/:_id" ,async (req, res) => {
    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const userData = await UserModel.findById(_id);

        return res.status(200).json({ user: userData });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

})


/* 
 route   /update
 desc    update user details
 params  _id
 Body    NONE
 method  PUT
 Access  public
*/
Router.put("/update/:_id", async (req, res) => {
    try {
        await validateRestaurantById(req.params);
        const { _id } = req.params;
        const { userData } = req.body;

        const updateUserData = await UserModel.findByIdAndUpdate(
            _id,
            {
                $set: userData,
            },
            {
                new: true,
            }
        )

        return res.json({ user: updateUserData })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})



export default Router;