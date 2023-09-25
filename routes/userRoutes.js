import express from "express";
import {registerController} from "../controllers/userController.js"


//router object
const router = express.Router();


//routing
//register || post
router.route("/register").post(registerController)



export default router;