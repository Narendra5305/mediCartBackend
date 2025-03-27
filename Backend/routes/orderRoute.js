const express = require("express");

const {auth} = require("../middleware/auth")
const  {rbac} = require("../middleware/rbac")


const {GetOrderData , PostOrderData , PatchOrderData , DeleteOrderData } = require("../controllers/orderController")


const orderRouter = express.Router();



orderRouter.get('/' , auth, GetOrderData)


orderRouter.post('/' , auth ,PostOrderData )





orderRouter.patch('/:id' , auth, PatchOrderData)


orderRouter.delete('/:id' , auth,  rbac(["admin"]) , DeleteOrderData )



module.exports = {orderRouter}