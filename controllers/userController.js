import { comparePassword, hashPassword } from "../helpers/authHelpers.js";
import userModel from "../models/userModel.js";
import Jwt from "jsonwebtoken";

export const registerController = async(req,res)=>{
try {
    const {name,email,password,phone,address} = req.body;
       //validations
    if(!name){
        return res.send({error:"Name is required"})
    }
    if(!email){
        return res.send({error:"email is required"})
    }
    if(!password){
        return res.send({error:"password is required"})
    }
    if(!phone){
        return res.send({error:"phone is required"})
    }
    if(!address){
        return res.send({error:"address is required"})
    }
//check users
const existingUser = await userModel.findOne({email})
//existing user 
if (existingUser){
    return res.status(200).send({
        success:true,
        message:"Already registered please login"
    })
}
 
//register user
const hashedPassword = await hashPassword(password);
//save
const user = await new userModel({
    name,email,phone,address,password:hashedPassword,
}).save();

res.status(201).send({
    success:true,
    message:"User register Successfully",
    user
})

} catch (error) {
    res.status(500).json({
        success:false,
        message: "Error in Registration",
        error
    })
}
};


/// FOR LOGIN || POST METHOD

export const loginController = async(req,res)=>{
try {
    const {email,password} = req.body;
    //validation
    if(!email || !password){
        return res.status(404).send({
            success:false,
            message:"invalid email or password"
        })
    }
    //check user

    const user = await userModel.findOne({email})
    if(!user){
        return res.status(404).send({
            success : false,
            messsage: "Email is not registered",

        })
    }

    const match = await comparePassword(password,user.password)

    if(!match){
        return res.status(404).send({
            success:false,
            message:"Invalid password"
        })
    }

    //token
    const token = await Jwt.sign({_id:user._id}, process.env.JWT_SECRET , {
        expiresIn:"7d",
    })
res.status(200).json({
    success:true,
    message:"login successfully",
    user:{
        name:user.name,
        email:user.email,
        phone:user.phone
    },
    token

})

} catch (error) {
    res.status(500).json({
        success:false,
        messsage:"Error in login",
        error
    })
}
}

//test controller
export const testController=(req,res)=>{
    res.send("protected route")
}

