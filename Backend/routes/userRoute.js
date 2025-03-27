const express = require("express");

const userRouter = express.Router();

const {auth} = require("../middleware/auth")
const  {rbac} = require("../middleware/rbac")

const  {GetUsersData , GetProfileData,  RegistrationUserData , LoginUser , PatchUserData , DeleteUserData } = require("../controllers/userController")


userRouter.get('/' ,auth , rbac(["admin"]) ,  GetUsersData)


userRouter.get('/:id' ,auth  ,  GetProfileData)



userRouter.post('/signup' ,  RegistrationUserData)

userRouter.post('/signin' ,   LoginUser)



userRouter.patch('/:id' , auth ,  PatchUserData)


userRouter.delete('/:id' ,auth,  rbac(["admin"]) ,  DeleteUserData )



module.exports = {userRouter}