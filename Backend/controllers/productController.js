const  {ProductModel} = require("../models/product.model")



const GetProductData = async(req , res)=>{
    try {
        let {category, offer, brand, sort, page = 1 } = req.query ;
        let filter = {} ;

        if (category){
            filter.category = category
        }

        if (offer){
            filter.offer = offer
        }

        if (brand){
            filter.brand = brand
        }


        let sortQuery = {};

        if (sort==="asc"){
            sortQuery.one_time_price = 1 ;
        }

        if (sort==="desc"){
            sortQuery.one_time_price = -1 ;
        }

        let limit = 16 ;
        let skip = (page - 1 ) * limit ;

        const product = await ProductModel.find(filter).sort(sortQuery).limit(limit).skip(skip)

        res.status(201).json({"Product":product})


    } catch (error) {
        res.status(500).json({ error: "Error fetching product" });
    }
}

const PostProductData = async(req , res)=>{
    
    try{
        const newProduct = new ProductModel(req.body )
        await newProduct.save()
        res.status(201).json({ message: "Product added successfully!", product: newProduct });

    } catch (error) {
        res.status(500).json({ error: "Error uploading product" });
    }
}



const PatchProductData = async(req , res)=>{

}




const DeleteProductData = async(req , res)=>{

}



module.exports ={GetProductData , PostProductData , PatchProductData , DeleteProductData }