import express from "express";
import {loginController, registerController, testController} from "../controllers/userController.js"
import { isAdmin, requireSignIn } from "../middleware/authMiddlwware.js";


//router object
const router = express.Router();


//routing
//register || post
router.route("/register").post(registerController)

//LOGIN || POST
router.route("/login").post(loginController)

//test routes
router.route("/test").get(requireSignIn,isAdmin,testController)



export default router;