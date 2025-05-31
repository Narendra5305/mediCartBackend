const {UserModel} = require("../models/user.model");
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');



require('dotenv').config()


const GetUsersData = async(req , res)=>{
    res.send("user")
}


const  GetProfileData = async(req , res)=>{
    try {
        const userId = req.userId;
        
        if (!userId) {
        return res.status(401).json({ message: "Unauthorized: No user ID found" });
        }

        const user = await UserModel.findById(userId).select("-password"); 

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching profile data:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}



const RegistrationUserData = async(req , res)=>{
    const {name , email , password , address , phone , role} = req.body;
    try {
        const findUser =await UserModel.findOne({email}) ;

        const saltRounds = parseInt(process.env.SALT_ROUNDS) || 10 ;

        if (findUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        bcrypt.hash(password, saltRounds , async(err, hash)=> {
            if (err){
                return res.status(400).json({ err: "there has been error" });
            }else{
                const NewUser = new UserModel({
                    name , 
                    email , 
                    password:hash , 
                    address , 
                    phone , 
                    role
                })
                await NewUser.save();
                res.status(201).json({ message: "User registered successfully" });
            }
        });

    } catch (error) {
        res.status(500).json({ error: "Registration failed" });
    }
   
}


const LoginUser = async(req , res)=>{
    const { email, password } = req.body;
    try {

        const user = await UserModel.findOne({ email });

        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        bcrypt.compare(password , user.password, (err, result)=>{
            if (err){
                return res.status(400).json({ err: "there has been error" });
            }

            if (result){
                const token  =  jwt.sign({ userId : user._id , role:user.role  }, process.env.SECRET_KEY);
                res.status(200).json({ message: "Login successful", token });
            }else{
                return res.status(400).json({ error: "Invalid credentials" });
            }
        });


    } catch (error) {
        res.status(500).json({ error: "Login failed" });
    }
}





const PatchUserData = async(req , res)=>{
    
}


const DeleteUserData = async(req , res)=>{

}

module.exports ={GetUsersData , GetProfileData , RegistrationUserData , LoginUser, PatchUserData , DeleteUserData }