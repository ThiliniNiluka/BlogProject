import mongoose from "mongoose";
import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    // console.log(req.body);
    // res.status(200).json({ message: "Signup successful" });

const { username, email, password} = req.body;

if(!username || !email || !password || username === '' || email === '' | password === ''){
    return res.status(200).json({ message: "All Fileds are requried"});
 }

const hashPassword = bcryptjs.hashSync(password, 10);
    
const newUser = new User ({
    username,
    email,
    password: hashPassword
});

await newUser.save();
res.json({ message: "Signup sucessful"});
}