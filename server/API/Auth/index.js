// library
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import passport from "passport";
// Models
import { UserModel } from "../../database/user"

const Router = express.Router();


/* 
 route   /signup
 desc    registering new user with email and password
 params  NONE
 method  POST
 Access  public
*/
Router.post("/signup", async (req, res) => {
    try {
        // check  whether email exist or not
        await UserModel.findByEmailAndPhoneNumber(req.body.credentials);

        // save the data to database
        const newUser = await UserModel.create(req.body.credentials);

        // create the JSW
        const token = newUser.GenerateJwtToken();

        return res.status(200).json({ token, status: "success" });
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})

/* 
 route   /signin
 desc    registering new user with email and password
 params  NONE
 method  POST
 Access  public
*/

Router.post("/signin", async (req, res) => {
    try {

        // checking wheather user exists or not
        const user = await UserModel.findUserByEmailAndPassword(req.body.credentials);

        // generate jwt token
        const token = user.GenerateJwtToken();

        return res.status(200).json({ token, status: "succesfully login " });
    }
    catch (error) {
        res.status(500).json({ error: error.message })
    }
})

/* 
 route   /google
 desc    sign in with google
 params  NONE
 method  GET
 Access  public
*/

Router.get("/google", passport.authenticate("google", {
    scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email"

    ]
}))

/* 
 route   /google/callback
 desc    Google signin callback
 params  NONE
 method  GET
 Access  public
*/

Router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
        return res.json({token :req.session.passport.user.token});

    }
);
export default Router;