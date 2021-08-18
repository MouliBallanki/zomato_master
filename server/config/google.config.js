import { doesNotMatch } from "assert";
import { profile } from "console";
import passport from "passport";
import googleOAuth from "passport-google-oauth20";

import { UserModel } from "../database/Allmodels";

// using google strategy
const GoogleStrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECREAT,
                callbackURL: "http://localhost:4000/auth/google/callback",
            },
            async (accessToken, refreshToken, profile, done) => {
                const newUser = {
                    fullname: profile.displayName,
                    email: profile.emails[0].value,
                    profilePic: profile.photos[0].value,
                };
                try {
                    // checking wheather user exist or not
                    const user = await UserModel.findOne({ email: newUser.email });
                    if (user) {
                        // generating token
                        const token = user.GenerateJwtToken();
                        done(null, {user , token});
                    } else {
                        // creating user and generating token 
                        const user = await UserModel.create(newUser);
                        const token = user.GenerateJwtToken();
                        done(user, {user , token});
                    }

                } catch (error) {
                    done (error , null);
                }

            }
        )
    );
    passport.serializeUser((userData , done) => done (null , {...userData}));
    passport.deserializeUser((id , done) => done (null , {...id}));

}
