
import express from "express";
import {  Register, Login, Logout, UpdateUser } from  "../controllers/authController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);

// Protect the update user route
router.route("/updateUser")
  .post(authMiddleware, UpdateUser); // Apply authMiddleware here

export default router;