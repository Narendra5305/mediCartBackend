const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  brand_name: { type: String, required: true },
  product_name: { type: String, required: true },
  one_time_price: { type: Number, required: true },
  auto_replenish_price: { type: Number, required: true },
  offer: { type: Number, default: 0 },
  returns: { type: Boolean, default: false },
  returns_policy: { type: String, required: true },
  key_benefits: { type: String, required: true },
  description: { type: String, required: true },
  key_ingredients: { type: String, required: true },
  category: { type: String, required: true },
  images: [{ type: String, required: true }],
  stock: { type: Number, required: true },
  rating: { type: Number, min: 0, max: 5 },
}, { timestamps: true });

const ProductModel = mongoose.model("Product", productSchema);


module.exports = {ProductModel};
