import mongoose from "mongoose";

// libraries
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: { type: String }


    },
    {
        timestamps: true,
    }
)

UserSchema.statics.findByEmailAndPhoneNumber = async ({ email, phoneNumber }) => {
    const checkUserByEmail = await UserModel.findOne( {email} );
    const checkUserByPhoneNumber = await UserModel.findOne( {phoneNumber} );


    if (checkUserByEmail || checkUserByPhoneNumber) {
        throw new Error("User Already exist...😉");
    }
    return false;
}


UserSchema.pre("save", function(next) {
    const user = this;

    // checking password is modified or not 
    if(!user.isModified("password")) return next();

    // hashing the password
    bcrypt.genSalt( 8 , (error , salt) => {
        if(error) return next(error);

        // assingning hash to the password
        bcrypt.hash(user.password , salt , (error ,hash) => {
            if(error) return next(error);
            user.password = hash;
            return next();
        })
    })
})

UserSchema.methods.GenerateJwtToken = function (){
    return jwt.sign({user: this._id.toString()} ,"zomato");
}


UserSchema.statics.findUserByEmailAndPassword = async({email , password}) => {
    // checking whether user exist or not
    const user = await UserModel.findOne( {email} );
    if(!user){
        throw new Error ("User does not exists....😪");
    }

    // compare the password
    const doesPasswordMatch = await bcrypt.compare(password , user.password);
    if(!doesPasswordMatch) throw new Error ("Invalid password ");

    return user;
}
export const UserModel = mongoose.model("Users", UserSchema);
