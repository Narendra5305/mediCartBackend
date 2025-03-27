const express = require("express");
const ConnectedToDB = require("./config")
const {productRouter} = require("./routes/productRoute")
const {userRouter} = require("./routes/userRoute")
const {orderRouter} = require("./routes/orderRoute")
const cors = require('cors');

const app = express();

app.use(express.json());


app.use(cors({ origin: 'http://localhost:5173' }));



app.use('/users' , userRouter )
app.use('/products' , productRouter )
app.use('/orders' , orderRouter)


app.get('/',(req,res)=>{
    res.send("this is dermstore api")
})


app.listen(8080,()=>{
    ConnectedToDB()
    console.log("Server is running on http://localhost:8080/")
})