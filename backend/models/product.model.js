import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: Array,
      required: true,
    },
    favorite: {
      type: Number,
      required: false,
    },
    brand: {
      type: String,
      required: true,
    },
    feature: { type: Array, required: false },
    features1: { type: String, required: false },
    fsImg: { type: String, required: false },
    features2: { type: String, required: false },
    fsImg2: { type: String, required: false },
    features3: { type: String, required: false },
    fsImg3: { type: String, required: false },
    features4: { type: String, required: false },
    fsImg4: { type: String, required: false },
    features5: { type: String, required: false },
    fsImg5: { type: String, required: false },
    category: { type: String },
    properties: { type: Object },
    sales: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt
  }
);

const Product = mongoose.model("Product", productSchema);

export default Product;
