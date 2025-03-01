import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const passwordHash = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email,password: passwordHash });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(errorHandler(500, "Something went wrong"));    
    }
}

export const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }
        const isPasswordValid = bcryptjs.compareSync(password, user.password);
        if (!isPasswordValid) {
            return next(errorHandler(401, "Invalid password"));
        }
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        const { password: passwordHash, ...userWithoutPassword } = user.toObject();
        const expires = new Date(Date.now() + 3600000); // 1 hour
        res.cookie("token", token, { httpOnly: true, expires });
        res.status(200).json(userWithoutPassword);
    } catch (error) {
         next(errorHandler(500, "Something went wrong"));    
    }   
}  