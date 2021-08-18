import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "Users"
        },
        orderDetails: [
            {
                type: mongoose.Types.ObjectId,
                ref: "Foods",
                quantity: { type: Number, required: true },
                status: { type: String, required: true },
                paymentDetails: {
                    itemTotal: { type: String, required: true },
                    promo: { type: Number, required: true },
                    tax: { type: Number, required: true },

                }
            }
        ],
    },
    {
        timestamps:true,
    }
)

export const OrderModel = mongoose.model("Orders", orderSchema);