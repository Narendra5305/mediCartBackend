

const express = require("express");
const {ChatBoat} = require("../controllers/chatBoatController");



const chatBoatRouter = express.Router();


chatBoatRouter.post('/' ,  ChatBoat)


module.exports ={chatBoatRouter}

