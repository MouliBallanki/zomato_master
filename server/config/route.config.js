import passport from "passport";
import JWTpassport from "passport-jwt";

const JWTStrategy = JWTpassport.Strategy;
const ExtractJWT = JWTpassport.ExtractJwt;

// models
import { UserModel } from "../database/user";

const options = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: "zomato",
};

export default (passport) => {
    passport.use(
        new JWTStrategy(options, async (jwt__payload, done) => {
            try {
                const doestUserExist = UserModel.findOne(jwt__payload.user);
                if(!doestUserExist) return done(null ,false);

                return done(null ,doestUserExist);
            } catch (error) {
                throw new Error(error);
            }
        })
    )
}