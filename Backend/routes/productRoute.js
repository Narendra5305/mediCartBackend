const express = require("express");

const {auth} = require("../middleware/auth")
const  {rbac} = require("../middleware/rbac")



const {GetProductData , PostProductData , PatchProductData , DeleteProductData } = require("../controllers/productController")


const productRouter = express.Router();



productRouter.get('/' ,  GetProductData)


productRouter.post("/upload" , PostProductData)


productRouter.patch('/' , auth, rbac(["admin"]) ,   PatchProductData)


productRouter.delete('/' , auth, rbac(["admin"]), DeleteProductData)



module.exports = {productRouter}