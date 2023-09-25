import { hashPassword } from "../helpers/authHelpers.js";
import userModel from "../models/userModel.js";

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


