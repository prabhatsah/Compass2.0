import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";
import bcryptjs from "bcryptjs";
import dotenv from "dotenv";

export const Login = async (req, res) => {
  dotenv.config();

    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(401).json({
          message: "Invalid data",
          success: false,
        });
      }
  
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          message: "Account doesn't exist",
          success: false,
        });
      }
  
      const isMatch = await bcryptjs.compare(password, user.password);
      if (!isMatch) {
        res.status(401).json({
          message: "Invalid email or password",
          success: false,
        });
      }
  
      // Create JWT token with user id
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET , {
        expiresIn: "5m",// Token expiration
      });

      // Convert user to object and exclude password
    const { password: _, ...userData } = user.toObject(); 
  
      return res
      .status(200)
      .cookie("token", token, { 
        httpOnly: true, 
        secure: process.env.NODE_ENV === "production", 
        sameSite: "Strict",
        path: "/", // Make cookie accessible across all routes
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      })
      .json({
        message: `Welcome back ${user.name}`,
        success: true,
        user: userData,
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({
        message: 'Server error during login',
        success: false,
    });
    }
  };

  export const Logout = (req, res) => {
    return res
      .status(200)
      .clearCookie("token", { path: "/", httpOnly: true, sameSite: "Strict" })
      .json({ message: "User logged out successfully", success: true });
  };
  
  export const Register = async (req, res) => {
    try {
      const { name, email, password, gender, profile_image } = req.body;
      if (!name || !email || !password || !gender ) {
        return req.status(401).json({
          message: "Invalid data",
          success: false,
        });
      }
      const user = await User.findOne({ email });
      if (user) {
        return res.status(401).json({
          message: "This email is already used",
          success: false,
        });
      }
  
      const hashedPassword = await bcryptjs.hash(password, 10);
  
      const newUser = await User.create({
        id: Date.now(),
        name,
        email,
        password: hashedPassword,
        gender,
        profile_image,
        bio: "Describe yourself",
      });
  
      return res.status(201).json({
        message: "Account created successfully",
        success: true,
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  export const UpdateUser = async (req, res) => {
    try {
      console.log("Hello")
      // Get the user's ID from the request (e.g., from JWT or session)
      const user = await User.findOne({ id: req.user.id });
  
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
  
      // Loop through the request body and update fields dynamically
      for (let [key, value] of Object.entries(req.body)) {
        if (value) {
          user[key] = value;  // Dynamically update the user fields
        }
      }
  
      await user.save();  // Save the updated user
  
      return res.json({ message: "Details updated successfully", success: true, user });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error", error });
    }
  };
  
  