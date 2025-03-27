const mongoose = require("mongoose")
require('dotenv').config()


const ConnectedToDB = async() =>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("DB is connected")
    } catch (error) {
        console.log("there has been an error on db" , error)
    }
}

module.exports = ConnectedToDB