import express from "express";

import { createProduct, deleteProduct, getProducts,getProducts2,getProductById, updateProduct } from "../controllers/product.controller.js";

const router = express.Router();


router.get("/product/:id", getProductById); // Matches `/product/123`

// Route to get products by user
router.get("/user/:user", getProducts2);    // Matches `/user/john`
router.get("/", getProducts);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
