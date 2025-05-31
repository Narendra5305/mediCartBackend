const {OrderModel} = require('../models/order.model')


const GetOrderData = async(req , res)=>{
    try {
        const orders = await OrderModel.find();
        res.status(200).json({ success: true, data: orders });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Failed to fetch orders', error: error.message });
    }
}



const PostOrderData = async(req , res)=>{
    const {role , userId } = req ;
    try {
        const newOrder =await OrderModel.create({
            user : userId,
            products : req.body.products,
            totalPrice : req.body.totalPrice

        } )

        res.status(201).json({"msg":"order successfull" , newOrder})
        
    } catch (error) {
        res.status(500).json({ error: "Error on booking order" });
    }
}


const PatchOrderData = async(req , res)=>{

}


const DeleteOrderData = async(req , res)=>{

}

module.exports ={GetOrderData , PostOrderData , PatchOrderData , DeleteOrderData }