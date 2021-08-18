// Importing ENV variables

require("dotenv").config();

// libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// database connection
import ConnectDB from './database/connection'

// intialising express
const zomato = express();

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }))
zomato.use(cors());
zomato.use(helmet());
zomato.use(passport.initialize());
zomato.use(passport.session());


// importing googleOAuth
import googleAuthConfig from"./config/google.config"
// passport configurations
googleAuthConfig(passport);

// importing Microservices route
import Auth from "./API/Auth";
import Restaurants from "./API/Restaurants"
import Food from "./API/Food";
import Image from "./API/Image";


// applicational routes 
zomato.use("/auth", Auth);
zomato.use("/restaurants",Restaurants);
zomato.use("/food" , Food);
zomato.use("/image" , Image);

zomato.get("/", (req, res) => res.json({ message: "set up success" }));

zomato.listen(4000, () => 
ConnectDB()
.then(() => console.log("server is running..."))
.catch(() =>console.log("server started.. but database connection failed..😥") )

);