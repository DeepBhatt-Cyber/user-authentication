import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const passwordHash = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email,password: passwordHash });
    try {
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error creating user" });
    }
}