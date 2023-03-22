import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    des: String,
    status: Boolean,
});

export default mongoose.model("Product", productSchema);
